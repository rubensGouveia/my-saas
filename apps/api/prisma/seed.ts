import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()
async function seed() {
  await prisma.member.deleteMany()
  await prisma.appointment.deleteMany()
  await prisma.service.deleteMany()
  await prisma.organization.deleteMany()
  await prisma.user.deleteMany()

  async function populateDatabase() {
    const passwordHash = await hash('123456', 1)

    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'email@email.com',
        avatarUrl: 'https://github.com/rubensGouveia.png',
        passwordHash,
      },
    })

    const fakeUser1 = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: faker.image.avatarGitHub(),
        passwordHash,
      },
    })

    const fakeUser2 = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: faker.image.avatarGitHub(),
        passwordHash,
      },
    })

    await prisma.organization.create({
      data: {
        name: 'Bruna Gouveia',
        slug: 'bruna-gouveia',
        ownerId: user.id,
        avatarUrl: faker.image.avatarGitHub(),
        domain: 'brunagouveia.com.br',
        members: {
          createMany: {
            data: [
              {
                userId: user.id,
                role: 'ADMIN',
              },
              {
                userId: fakeUser1.id,
                role: 'CLIENT',
              },
              {
                userId: fakeUser2.id,
                role: 'PROFESSIONAL',
              },
            ],
          },
        },
        services: {
          createMany: {
            data: [
              {
                name: 'Massagem Relaxante - 60min',
                duration: 60,
                price: 100,
              },
              {
                name: 'Massagem Relaxante - 30min',
                duration: 30,
                price: 50,
              },
              {
                name: 'Liberação Miofacial - 60min',
                duration: 60,
                price: 150,
              },
              {
                name: 'Liberação Miofacial - 30min',
                duration: 30,
                price: 75,
              },
            ],
          },
        },
      },
    })

    const massagem60 = await prisma.service.findFirst({
      where: {
        name: 'Massagem Relaxante - 60min',
      },
    })

    const organization = await prisma.organization.findFirst({
      where: {
        name: 'Bruna Gouveia',
      },
    })

    await prisma.appointment.createMany({
      data: [
        {
          date: new Date('2024-08-13'),
          time: new Date('2024-08-14 10:00:00'),
          clientId: fakeUser1.id,
          professionalId: fakeUser2.id,
          organizationId: organization?.id || 'organizationId',
          serviceId: massagem60?.id || 'serviceId',
          status: 'CONFIRMED',
        },
        {
          date: new Date('2024-08-14'),
          time: new Date('2024-08-14 10:00:00'),
          clientId: fakeUser1.id,
          professionalId: fakeUser2.id,
          organizationId: organization?.id || 'organizationId',
          serviceId: massagem60?.id || 'serviceId',
          status: 'PENDING',
        },
      ],
    })
  }

  await populateDatabase()
}

seed().then(() => {
  console.log('Database Seeded!')
})
