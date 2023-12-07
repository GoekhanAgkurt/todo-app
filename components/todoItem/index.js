import { todos } from "@/lib/data";

export default function TodoItem({ todo }) {
  return <li>{todo.title}</li>;
}
