/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem.jsx";

function Todos({ todos }) {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
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

export default Todos;
