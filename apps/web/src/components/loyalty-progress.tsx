import { Gift } from 'lucide-react'

import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface LoyaltyProgressProps {
  historyLength: number
  limit: number
}

export const LoyaltyProgress = ({
  historyLength,
  limit,
}: LoyaltyProgressProps) => {
  const servicesCompleted = historyLength % limit
  const numberToLimit = limit - servicesCompleted
  const labelTitle =
    numberToLimit === 1 ? 'atendimento restante' : 'atendimentos restantes'
  return (
    <Card className="col-start-2 col-end-4 row-start-4 row-end-5">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-3xl">
            {numberToLimit}
            <span className="text-xl"> {labelTitle}</span>
          </CardTitle>

          <Gift
            className="size-12"
            style={{
              stroke: 'url(#gradientSVG)',
            }}
          />
        </div>
      </CardHeader>

      <CardFooter>
        <Progress value={servicesCompleted * 10} max={limit * 10} />
        <div className="whitespace-nowrap text-xs text-muted-foreground">
          {servicesCompleted} de {limit}
        </div>
      </CardFooter>
    </Card>
  )
}
