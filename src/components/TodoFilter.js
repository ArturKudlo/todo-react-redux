import React from 'react';
import PropTypes from 'prop-types';

function TodoFilter(props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">Filter: </span>
      </div>
      <input value={props.value} onChange={props.onFilterChange} type="text" className="form-control" placeholder="Type here..." aria-label="Type here..." aria-describedby="basic-addon1"/>
    </div>
  );
}

TodoFilter.propTypes = {
  onFilterChange: PropTypes.func,
  filterValue: PropTypes.string,
};

export default TodoFilter;