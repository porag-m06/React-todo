import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({ todosProps, handleChange, delTodo}) {
  return (
    <ul>
    {todosProps.map((todo) => (
      <TodoListItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    ))}
  </ul>
  );
}

export default TodoList