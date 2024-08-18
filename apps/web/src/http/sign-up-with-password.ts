import { api } from './api-client'

type SignUpWithPasswordResponse = void

type SignUpWithPasswordRequest = {
  name: string
  email: string
  password: string
  org?: string
  referralCode?: string
}

export async function signUpWithPassword({
  name,
  email,
  password,
  org,
  referralCode,
}: SignUpWithPasswordRequest): Promise<SignUpWithPasswordResponse> {
  const url =
    org && referralCode
      ? `users?org=${org}&referralCode=${referralCode}`
      : 'users'
  await api.post(url, {
    json: {
      name,
      email,
      password,
    },
  })
}
