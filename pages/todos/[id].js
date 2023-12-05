import { useRouter } from "next/router";

export default function detailsPage({ todos }) {
  const router = new useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const todo = todos.find((todo) => todo.id === id);
  if (!isReady) return <p>wait</p>;
  if (!todo) return;

  console.log("todddouuuuuuooo", todo.id);

  return (
    <>
      <h2>Detailspage</h2>
      <h2>{todo.title}</h2>
      <p>{todo.note}</p>
    </>
  );
}
