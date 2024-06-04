function TodoItem({ todo }) {
  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p>
    </div>
  );
}

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default TodoItem;
