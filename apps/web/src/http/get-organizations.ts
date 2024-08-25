import type { Role } from '@saas/auth'

import { api } from './api-client'

type GetOrganizationsResponse = {
  organizations: {
    role: Role
    name: string
    id: string
    slug: string
    domain: string | null
    avatarUrl: string | null
  }[]
}

export async function getOrganizations() {
  const result = await api
    .get('organizations/member')
    .json<GetOrganizationsResponse>()

  return result
}
