import React from 'react';
import PropTypes from 'prop-types';

function TodoForm(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h4>Add new todo:</h4>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" value={props.newNameValue} onChange={props.onNewNameChange} className="form-control" id="name" placeholder="Enter your todo"/>
          </div>
          <div className="form-check">
            <input type="checkbox" checked={props.newCompleteValue} onChange={props.onNewCompleteChange} className="form-check-input" id="completed"/>
            <label className="form-check-label" htmlFor="completed">Completed?</label>
          </div>
          <button onClick={props.onNewSubmit} type="button" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  );
}

TodoForm.propTypes = {
  newNameValue: PropTypes.string,
  newCompleteValue: PropTypes.bool,
  onNewNameChange: PropTypes.func,
  onNewCompleteChange: PropTypes.func,
  onNewSubmit: PropTypes.func,
};

export default TodoForm;