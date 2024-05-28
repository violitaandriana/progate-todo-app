/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export default function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
