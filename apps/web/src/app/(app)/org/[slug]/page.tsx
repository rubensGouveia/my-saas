import { CheckCircle2 } from 'lucide-react'

import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'

export default async function Org() {
  return (
    <div className="py-4">
      <Header />
      <main className="mx-auto flex max-w-[1200px] gap-4 py-6">
        <aside className="flex w-96 flex-col gap-3 rounded-lg border p-6">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-md font-medium"> Histórico</span>
            <span className="text-sm text-muted-foreground">7 cortes</span>
          </div>
          <Separator />
          <div className="mb-1 flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium"> Massoterapia</span>
              <span className="text-xs text-muted-foreground">
                26/08/2024 16:00
              </span>
            </div>
            <CheckCircle2 className="text-success size-6" />
          </div>
          <div className="mb-1 flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium"> Massoterapia</span>
              <span className="text-xs text-muted-foreground">
                26/08/2024 16:00
              </span>
            </div>
            <CheckCircle2 className="text-success size-6" />
          </div>
          <div className="mb-1 flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium"> Massoterapia</span>
              <span className="text-xs text-muted-foreground">
                26/08/2024 16:00
              </span>
            </div>
            <CheckCircle2 className="text-success size-6" />
          </div>
          <div className="mb-1 flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium"> Massoterapia</span>
              <span className="text-xs text-muted-foreground">
                26/08/2024 16:00
              </span>
            </div>
            <CheckCircle2 className="text-success size-6" />
          </div>
          <div className="mb-1 flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium"> Massoterapia</span>
              <span className="text-xs text-muted-foreground">
                26/08/2024 16:00
              </span>
            </div>
            <CheckCircle2 className="text-success size-6" />
          </div>
        </aside>
        <div className="flex grow flex-col gap-4">
          <section className="flex grow flex-col gap-3 rounded-lg border p-6">
            {' '}
            <span className="text-md font-medium"> Cartão fidelidade</span>
          </section>
          <section>3 cortes restantes</section>
        </div>
      </main>
    </div>
  )
}
