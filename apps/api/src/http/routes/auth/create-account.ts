import { hash } from 'bcryptjs'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'
import { createSlug } from '@/utils/create-slug'

import { BadRequestError } from '../_errors/bad-request-error'

export async function createAccount(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        summary: 'Create a new account',
        tags: ['Auth'],
        querystring: z.object({
          org: z.string().optional(),
          referralCode: z.string().optional(),
        }),
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          password: z.string().min(6),
        }),
      },
    },
    async (request, reply) => {
      const { name, email, password } = request.body
      const { org, referralCode } = request.query

      const userWithSameEmail = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (userWithSameEmail) {
        throw new BadRequestError('User with same email already exists')
      }

      const passwordHash = await hash(password, 6)
      const nameSplitted = name.split(' ')

      if (org) {
        const organization = await prisma.organization.findUnique({
          where: {
            slug: org,
          },
        })

        if (!organization) {
          throw new BadRequestError('Organization not exists')
        }
      }

      if (referralCode) {
        const parentUser = await prisma.user.findUnique({
          where: {
            referralCode,
          },
        })

        if (!parentUser) {
          throw new BadRequestError(
            'Something went wrong, please ask for a new link',
          )
        }
      }
      if (org && referralCode) {
        await prisma.user.create({
          data: {
            name,
            email,
            passwordHash,
            referralCode: createSlug(`${nameSplitted[0]} ${nameSplitted[1]}`),
            childNetworks: {
              create: {
                parentUser: {
                  connect: {
                    referralCode,
                  },
                },
                organization: {
                  connect: {
                    slug: org,
                  },
                },
              },
            },
            member_on: {
              create: {
                organization: {
                  connect: {
                    slug: org,
                  },
                },
                role: 'CLIENT',
              },
            },
          },
        })
      } else {
        await prisma.user.create({
          data: {
            name,
            email,
            passwordHash,
            referralCode: createSlug(`${nameSplitted[0]} ${nameSplitted[1]}`),
          },
        })

        return reply.status(201).send()
      }
    },
  )
}
