import { CheckCircle2 } from 'lucide-react'

interface HistoryItemProps {
  title: string
  dateTime: Date
  status?: string
}
export const HistoryItem = ({ dateTime, title, status }: HistoryItemProps) => {
  if (status === 'pending') {
    console.log(status)
  }
  return (
    <>
      <div className="mb-1 flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs text-muted-foreground">
            {dateTime.toLocaleString('pt-BR')}
          </span>
        </div>
        <CheckCircle2
          className="size-6"
          style={{
            stroke: 'url(#gradientSVG)',
          }}
        />
      </div>
    </>
  )
}
