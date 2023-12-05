import TodoItem from "../todoItem";

export default function TodoList({ todos, onDeleteTodo }) {
  return (
    <>
      <h2>deine Todo Liste</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
    </>
  );
}

{
  /* <>
<h2>Gifts List</h2>
<ul>
  {gifts.map((gift) => (
    <GiftCard key={gift.id} gift={gift} onDeleteGift={onDeleteGift} />
  ))}
</ul>
</> */
}
