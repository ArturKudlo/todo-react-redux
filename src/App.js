import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoFilter from './containers/TodoFilter';
import TodoList from './containers/TodoList';
import TodoForm from './containers/TodoForm';

function App() {
  return (
    <div className="container">
      <h1>This is a great TODO application!</h1>
      <TodoFilter/>
      <TodoList/>
      <TodoForm/>
    </div>
  );
}

export default App;
