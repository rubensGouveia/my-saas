import { Header } from '@/components/header'
import { History } from '@/components/history'
import { LoyaltyCard } from '@/components/loyalty-card'
import { LoyaltyProgress } from '@/components/loyalty-progress'

export default async function Org() {
  const items = [
    { id: '1s', title: 'Massoterapia', dateTime: new Date() },
    { id: '2a', title: 'Massoterapia', dateTime: new Date() },
    { id: 's 3', title: 'Massoterapia', dateTime: new Date() },
    { id: 's4', title: 'Massoterapia', dateTime: new Date() },
    { id: '5s', title: 'Massoterapia', dateTime: new Date() },
    { id: '5s6', title: 'Massoterapia', dateTime: new Date() },
    { id: '0s1', title: 'Massoterapia', dateTime: new Date() },
    { id: '2s0', title: 'Massoterapia', dateTime: new Date() },
    { id: 's03', title: 'Massoterapia', dateTime: new Date() },
    { id: '4s0', title: 'Massoterapia', dateTime: new Date() },
    { id: 's1', title: 'Massoterapia', dateTime: new Date() },
    { id: 'sq1', title: 'Massoterapia', dateTime: new Date() },
    { id: '2', title: 'Massoterapia', dateTime: new Date() },
    { id: ' 3', title: 'Massoterapia', dateTime: new Date() },
    { id: '4', title: 'Massoterapia', dateTime: new Date() },
    { id: '5', title: 'Massoterapia', dateTime: new Date() },
    { id: '56', title: 'Massoterapia', dateTime: new Date() },
    { id: '01', title: 'Massoterapia', dateTime: new Date() },
    { id: '20', title: 'Massoterapia', dateTime: new Date() },
    { id: '03', title: 'Massoterapia', dateTime: new Date() },
    { id: '40', title: 'Massoterapia', dateTime: new Date() },
    { id: '50', title: 'Massoterapia', dateTime: new Date('2024-09-01') },
    { id: '60', title: 'Massoterapia', dateTime: new Date('2024-09-15') },
  ]
  return (
    <div className="py-4">
      <Header />
      <main className="mx-auto max-h-[900px] max-w-[1200px] gap-4 py-6 lg:grid lg:grid-cols-3 lg:grid-rows-4">
        <History items={items} />

        <LoyaltyCard
          items={items}
          reward="O seu décimo atendimento sai de graça"
          size={10}
        />

        <LoyaltyProgress historyLength={items.length} limit={10} />
      </main>
    </div>
  )
}
