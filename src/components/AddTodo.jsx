import React, { useState } from 'react';
import './AddTodo.css';
/* eslint-disable jsx-a11y/control-has-associated-label */
import { BsFillHouseAddFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

function AddTodo({ addTodoItem }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="add-todo-input"
          value={title}
          onChange={handleChange}
        />
        <button type="submit"><BsFillHouseAddFill /></button>
      </form>
      <span>{message}</span>
    </>
  );
}

AddTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default AddTodo;
