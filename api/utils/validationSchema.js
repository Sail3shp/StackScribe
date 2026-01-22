import { number, z } from 'zod'
export const userSchema = z.object({
    email: z.email("Invalid email format"),
    password: z.string().trim().min(8, "password must be at least 8 character long").max(30, "too long of a password"),
    name: z.string().trim().max(15, "Name shouldn't exceed more than 15 characters").min(4, "Name must be greater than 4 characters")
})

export const blogSchema = z.object({
    title: z.string().max(100, "title shouldn't exceed 100 characters").min(10, "title should be atleast 10 character long"),
    content: z.string().max(1000, "content shouldn't exist 1000 character").min(50, "content should be atleast 50 characters long")
})

export const getBlogSchema = z.object({
    query: z.object({
        page: z.string().optional().transform((val) => (val ? parseInt(val,10):1)).pipe(z.number().positive("Enter positive number")),
        limit: z.string().optional().transform(Number),
        q: z.string().min(4, "Search must be greater than 3 charachters").optional()
    })
})

