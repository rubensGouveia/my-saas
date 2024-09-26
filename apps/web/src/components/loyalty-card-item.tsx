import { CheckCircle2, Gift } from 'lucide-react'

interface LoayaltyCardItemProps {
  status: 'pending' | 'completed'
  isLast?: boolean
}
export const LoyaltyCardItem = ({
  status,
  isLast = false,
}: LoayaltyCardItemProps) => {
  return (
    <div className="flex size-32 items-center justify-center rounded-lg bg-muted">
      {status === 'completed' && (
        <CheckCircle2
          className="size-1/2"
          style={{
            stroke: 'url(#gradientSVG)',
          }}
        />
      )}
      {isLast && status === 'pending' && (
        <Gift
          className="size-1/2 opacity-45"
          style={{
            stroke: 'url(#gradientSVG)',
          }}
        />
      )}
    </div>
  )
}
