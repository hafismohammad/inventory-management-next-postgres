import {z} from 'zod'

export const CreateInventorySchema  = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    quantity: z.coerce.number().int().nonnegative(),
    price: z.coerce.number().nonnegative(),
    description: z.string().optional()
})

export type CreateInventoryInput = z.infer<typeof CreateInventorySchema>