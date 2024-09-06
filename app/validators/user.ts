import { z } from "zod"

const userZodSchema = z.object({

    name: z.string().min(1),
    roll: z.number().int().min(1),
    email: z.string().email().min(1),
    password: z.string().min(1),
    cPassword: z.string().min(1).optional(),
    branch: z.string().min(1),
    domain: z.string().min(1),
    role: z.array(z.string()).min(1),
    archived: z.boolean().optional()

})

const loginZodSchema = z.object({

    roll: z.number().int().min(1),
    password: z.number().int().min(1)
    
})

export { 
    userZodSchema,
    loginZodSchema
}