import { z } from "zod";

export const TodoSchema = z.object({
  task: z.string().min(1, 'task is required!'),
  description: z.string().optional(),
  is_complete: z.boolean().default(false),
  inserted_at: z.string()
});

export type Todo = z.infer<typeof TodoSchema>;
