import { ChevronsUpDown, PlusCircle } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { getOrganizations } from '@/http/get-organizations'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Separator } from './ui/separator'

export async function OrganizationSwitcher() {
  const currentOrg = cookies().get('org')?.value
  const { organizations } = await getOrganizations()

  const currentOrganization = organizations.find(
    (organization) => organization.slug === currentOrg,
  )
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-p-1 flex w-[268px] items-center gap-2 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary">
        {currentOrganization ? (
          <>
            <Avatar className="mr-2 size-4">
              {currentOrganization.avatarUrl && (
                <AvatarImage src={currentOrganization.avatarUrl} />
              )}
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <div className="flex w-full items-center justify-between">
              <p className="inline truncate">{currentOrganization.name}</p>
              <Separator className="ml-auto mr-2 h-5" orientation="vertical" />
              <p className="truncate text-xs text-muted-foreground">
                {currentOrganization.role}
              </p>
            </div>
          </>
        ) : (
          <span className="text-muted-foreground">Organization</span>
        )}
        <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-16}
        sideOffset={12}
        className="w-[300px]"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          {organizations.map((organization) => (
            <DropdownMenuItem key={organization.id} asChild>
              <Link href={`/org/${organization.slug}`}>
                <Avatar className="mr-2 size-4">
                  {organization.avatarUrl && (
                    <AvatarImage src={organization.avatarUrl} />
                  )}
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <span className="line-clamp-1">{organization.name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="/create-organization" className="disabled">
            <PlusCircle className="mr-2 size-4" />
            Criar uma organização
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
