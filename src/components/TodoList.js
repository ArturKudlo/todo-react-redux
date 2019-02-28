import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import todoItem from "../shapes/todoItem";

function TodoList(props) {
  return (
    <div>
      <table className="table table-dark">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Completed?</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        {
          props.items.map((item) =>
            (
              <TodoItem item={item} key={item.id} onComplete={props.onItemComplete}/>
            )
          )
        }
        </tbody>
      </table>
    </div>
  )
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(todoItem)),
  onItemComplete: PropTypes.func,
};

export default TodoList;