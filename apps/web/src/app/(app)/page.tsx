import { auth } from '@/auth/auth'
import { Header } from '@/components/header'

export default async function Home() {
  const { user } = await auth()
  console.log('user', user)
  return (
    <>
      <Header />
    </>
  )
}
