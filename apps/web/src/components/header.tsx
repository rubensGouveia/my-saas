import { Slash } from 'lucide-react'
import Image from 'next/image'

import logoIcon from '@/assets/app_icon.svg'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={logoIcon} alt="logo" className="size-8 dark:invert" />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Separator className="h-5" orientation="vertical" />
        <ProfileButton />
      </div>
    </div>
  )
}
