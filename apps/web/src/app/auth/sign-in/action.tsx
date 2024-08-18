'use server'

import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { z } from 'zod'

import { signInWithPassword } from '@/http/sign-in-with-password'
const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export async function signInWithEmailAndPassword(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }
  const { email, password } = result.data
  try {
    const { token } = await signInWithPassword({
      email,
      password,
    })

    cookies().set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
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
