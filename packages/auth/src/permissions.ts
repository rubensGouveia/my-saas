import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './subjects/role'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(_, { can }) {
    can('manage', 'all')
  },
  PROFESSIONAL(user, { can }) {
    can(['get', 'create'], 'Appointment')
    can(['update', 'delete'], 'Appointment', {
      ownerId: { $eq: user.id },
    })
    can('get', 'Invite')
  },
  CLIENT(user, { can }) {
    can(['get', 'create'], ['Appointment'])
    can(['update', 'delete'], ['Appointment'], {
      ownerId: { $eq: user.id },
    })
    can(['get', 'create'], ['Invite'])
    can(['update', 'delete'], ['Invite'], {
      ownerId: { $eq: user.id },
    })
  },
}
