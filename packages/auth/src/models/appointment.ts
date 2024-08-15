import { z } from 'zod'

export const appointmentSchema = z.object({
  __typename: z.literal('Appointment').default('Appointment'),
  id: z.string(),
  ownerId: z.string(),
})

export type Appointment = z.infer<typeof appointmentSchema>
