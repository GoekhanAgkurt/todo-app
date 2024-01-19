import { useRouter } from "next/router";
import { uid } from "uid";

export default function Create({ onAddTodo }) {
  const router = useRouter();

  function addTodo(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("testtttttttt");

    const newTodo = {
      title: data.title,
      note: data.note,
      id: uid(),
    };

    console.log("neue todo: ", newTodo);

    onAddTodo(newTodo);
    router.push("/");
  }

  return (
    <main>
      <h2>Create a new Todo</h2>
      <form onSubmit={addTodo}>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="z.B. einkaufen"
        ></input>

        <label>Note</label>
        <input
          type="text"
          id="note"
          name="note"
          placeholder="z.B. Weichspüler"
        ></input>
        <button type="submit"> Submit</button>
      </form>
    </main>
  );
}
