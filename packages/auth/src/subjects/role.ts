import { z } from 'zod'
export const roleSchema = z.union([
  z.literal('ADMIN'),
  z.literal('PROFESSIONAL'),
  z.literal('CLIENT'),
])

export type Role = z.infer<typeof roleSchema>
