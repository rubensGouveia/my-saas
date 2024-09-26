import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { LoyaltyCardItem } from './loyalty-card-item'
import { Separator } from './ui/separator'
interface LoyaltyCardProps {
  size?: number
  reward: string
  items: { id: string; title: string; dateTime: Date }[]
}
export const LoyaltyCard = ({ items, reward, size = 10 }: LoyaltyCardProps) => {
  const completed = items.length % size
  const arrayCompleted = items?.slice(-completed).map((item) => ({
    ...item,
    status: 'completed' as const,
  }))

  const boxes = [
    ...arrayCompleted,
    ...Array.from({ length: size - completed }, (_, i) => ({
      id: `${i + 1}-pending`,
      status: 'pending' as const,
    })),
  ]
  return (
    <>
      <Card className="col-start-2 col-end-4 row-start-1 row-end-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-medium">
            Cartão fidelidade
          </CardTitle>
          <CardDescription>
            <span className="text-sm text-muted-foreground">{reward}</span>
          </CardDescription>
        </CardHeader>
        <Separator />

        <CardContent className="grid grid-cols-5 place-items-center gap-6 p-6">
          {boxes.map((box, index) => (
            <LoyaltyCardItem
              key={box.id}
              status={box.status}
              isLast={index + 1 === size}
            />
          ))}
        </CardContent>
      </Card>
    </>
  )
}
