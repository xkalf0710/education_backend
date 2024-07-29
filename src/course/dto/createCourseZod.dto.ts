import { z } from "zod";

export const createCourseSchema = z.object({
    name: z.string(), 
    description: z.string().min(5),
    price: z.number().positive(),
    is_progress_limit: z.string(),
}).required();

export type CreateCourseZodDto = z.infer<typeof createCourseSchema>;