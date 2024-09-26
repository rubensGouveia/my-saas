import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { HistoryItem } from './history-item'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'
interface HistoryProps {
  items: { id: string; title: string; dateTime: Date }[]
}
export const History = ({ items }: HistoryProps) => {
  const servicesQuantityLabel = `${items.length} ${items.length === 1 ? 'atendimento' : 'atendimentos'} `

  return (
    <>
      <Card className="col-start-1 col-end-2 row-start-1 row-end-5">
        <CardHeader className="pb-2">
          <div className="mb-2 flex items-center justify-between gap-3">
            <CardTitle className="text-xl font-medium">Histórico</CardTitle>
            <CardDescription>
              <span className="text-sm text-muted-foreground">
                {servicesQuantityLabel}
              </span>
            </CardDescription>
          </div>
        </CardHeader>
        <Separator />
        <ScrollArea className="h-[49vh]">
          <CardContent className="flex flex-col gap-3 py-3">
            {items.map((item) => (
              <HistoryItem
                key={item.id}
                title={item.title}
                dateTime={item.dateTime}
              />
            ))}
          </CardContent>
        </ScrollArea>
      </Card>
    </>
  )
}
