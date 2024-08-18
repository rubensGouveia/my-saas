import { api } from './api-client'

type GetProfileResponse = {
  user: {
    name: string
    id: string
    avatarUrl: string | null
    email: string
  }
}

export async function getProfile() {
  const result = await api.get('profile').json<GetProfileResponse>()

  return result
}
