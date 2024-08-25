import { redirect } from 'next/navigation'

import { Header } from '@/components/header'
import { getOrganizations } from '@/http/get-organizations'

export default async function Home() {
  const { organizations } = await getOrganizations()
  const currentOrganization =
    organizations.length === 1 ? organizations[0] : null
  if (currentOrganization) {
    redirect(`/org/${currentOrganization.slug}`)
  }

  return (
    <div className="py-4">
      <Header />
      <main></main>
    </div>
  )
}
