import { ChevronDown, LogOut } from 'lucide-react'

import { auth } from '@/auth/auth'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
function getInitials(name: string): string {
  const nameParts = name.trim().split(' ')

  const nonEmptyParts = nameParts.filter((part) => part !== '')

  const initials = nonEmptyParts
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

  return initials
}
export async function ProfileButton() {
  const { user } = await auth()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 outline-none">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium">{user.name}</span>
          <span className="text-xs text-muted-foreground">{user.email}</span>
        </div>
        <Avatar className="size-9">
          {user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
        <ChevronDown className="size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href={'/api/auth/sign-out'}>
            <LogOut className="mr-2 size-4" />
            Sign Out
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
