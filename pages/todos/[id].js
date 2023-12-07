import { todos } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const todo = todos.find((todo) => todo.id === id);
  if (!isReady) return "please wait";
  if (!todo) return "no found";
  return (
    <>
      <h3>todo.title</h3>
      <p>todo.note</p>

      <Link href="/">Back to list </Link>
    </>
  );
}
