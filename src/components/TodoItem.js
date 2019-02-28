import React from 'react';
import PropTypes from 'prop-types';
import {FaCheckCircle, FaAngry} from 'react-icons/fa';

import todoItem from "../shapes/todoItem";

function TodoItem(props) {
  let disabledProps = {};
  if (props.item.completed === true) {
    disabledProps = {disabled: 'disabled'};
  }

  return (
    <tr>
      <th scope="row">{props.item.id}</th>
      <td>{props.item.name}</td>
      <td>{props.item.completed ? <FaCheckCircle color='green'/> : <FaAngry color='red'/>}</td>
      <td><button onClick={props.onComplete.bind(null, props.item.id)} {...disabledProps}>Complete!</button></td>
    </tr>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape(todoItem),
  onComplete: PropTypes.func,
};

export default TodoItem;