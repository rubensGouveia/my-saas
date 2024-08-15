import { z } from 'zod'

import { appointmentSchema } from '../models/appointment'

export const appointmentSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Appointment'), appointmentSchema]),
])
export type AppointmentSubject = z.infer<typeof appointmentSubject>
