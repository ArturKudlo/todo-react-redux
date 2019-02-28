import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoFilter from './containers/TodoFilter';
import TodoList from './containers/TodoList';

function App() {
  return (
    <div className="container">
      <h1>This is a great TODO application!</h1>
      <TodoFilter/>
      <TodoList/>
    </div>
  );
}

export default App;
