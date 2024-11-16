import { supabase } from '../../supabase.client';
import { TodoSchema, type Todo } from '../utils/validation';

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase.from('todos').select('*').order('inserted_at', { ascending: false });
  if (error) throw error;
  return data.map((todo) => TodoSchema.parse(todo));
}
