import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';

function TodoListItem({ itemProp, handleChange, delTodo }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        className="icheck"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </li>
  );
}

TodoListItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
