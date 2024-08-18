import { api } from './api-client'

type SignInWithPasswordResponse = {
  token: string
}

type SignInWithPasswordRequest = {
  email: string
  password: string
}

export async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordRequest) {
  const result = await api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<SignInWithPasswordResponse>()

  return result
}
