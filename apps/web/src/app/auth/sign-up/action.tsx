'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { signUpWithPassword } from '@/http/sign-up-with-password'
const signUpSchema = z
  .object({
    name: z.string().refine((value) => value.split(' ').length > 1, {
      message: 'Por favor digite seu nome e sobrenome',
    }),
    email: z.string().email({ message: 'Por favor digite um email válido' }),
    password: z
      .string()
      .min(6, { message: 'Sua senha deve ter pelo menos 6 caracteres' }),
    password_confirmation: z.string(),
    org: z.string().optional(),
    referralCode: z.string().optional(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'As senhas precisam ser iguais',
    path: ['password_confirmation'],
  })

export async function signUpWithEmailAndPassword(data: FormData) {
  const result = signUpSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }
  const { name, email, password, org, referralCode } = result.data
  try {
    await signUpWithPassword({
      name,
      email,
      password,
      org,
      referralCode,
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json<{ message: string }>()
      return { success: false, message, errors: null }
    }

    console.log('err', err)

    return {
      success: false,
      message: 'Algo deu errado, tente novamente mais tarde',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}
