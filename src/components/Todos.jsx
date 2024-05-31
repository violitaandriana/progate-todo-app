/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export default function Todos({ todos, toggleCompleted }) {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />;
      })}
    </div>
  );
}

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};
