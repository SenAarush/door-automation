import { z } from "zod"

const userZodSchema = z.object({
    name: z.string().min(1),
    roll: z.number().int().min(1),
    branch: z.string().min(1),
    domain: z.string().min(1),
    role: z.array(z.string()).min(1),
    archived: z.boolean().default(false)
})

export { userZodSchema }