import { defineAbilitiesFor } from '@saas/auth'

const ability = defineAbilitiesFor({role: 'ADMIN'})

const userCan = ability.can('invite', 'User')

console.log(userCan)
