import { ThemeSwitcher } from './theme/theme-switcher'

export function Header() {
  return (
    <div className="max-m-[1200px] mx-auto flex items-center justify-between">
      <ThemeSwitcher />
    </div>
  )
}
