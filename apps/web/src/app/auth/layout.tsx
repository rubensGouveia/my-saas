import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'
import { getOrganizations } from '@/http/get-organizations'

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (isAuthenticated()) {
    const { organizations } = await getOrganizations()
    const currentOrganization =
      organizations.length === 1 ? organizations[0] : null
    // IMPROVE: handle multiple orgs
    const redirectPath = currentOrganization
      ? `/org/${currentOrganization.slug}`
      : '/'
    redirect(redirectPath)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-xs">{children}</div>
    </div>
  )
}
