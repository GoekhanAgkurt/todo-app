import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DetailsPage({ todos, onEditTodo }) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const { isReady } = router;
  const { id } = router.query;
  const todo = todos.find((todo) => todo.id === id);

  function editTodo(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const editedTodo = {
      id: id,
      title: data.title,
      note: data.note,
    };

    onEditTodo(editedTodo);
    setIsEdit(false);

    if (!isReady) return <p>Warte...</p>;
    if (!todo) return;
  }

  return (
    <>
      {todo ? (
        !isEdit ? (
          <>
            <h2>Detailspage</h2>
            <h2>{todo.title}</h2>
            <p>{todo.note}</p>
            <Link href="/">Zurück zur Liste</Link>
            <button type="button" onClick={() => setIsEdit(true)}>
              Bearbeiten
            </button>
          </>
        ) : (
          <>
            <h2>Todo bearbeiten</h2>
            <form onSubmit={editTodo}>
              <label>Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="z.B. Einkaufen"
                defaultValue={todo.title}
              ></input>

              <label>Note</label>
              <input
                type="text"
                id="note"
                name="note"
                placeholder="z.B. Weichspüler"
                defaultValue={todo.note}
              ></input>
              <button>Änderungen speichern</button>
            </form>
          </>
        )
      ) : (
        <p>Lade...</p>
      )}
    </>
  );
}
