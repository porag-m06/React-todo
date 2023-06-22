import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import './TodoList.css';

function TodoList({ todosProps, handleChange, delTodo }) {
  return (
    <ul className="list">
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

TodoList.propTypes = {
  todosProps: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoList;
