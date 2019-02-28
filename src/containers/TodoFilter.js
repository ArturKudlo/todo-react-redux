import {connect} from 'react-redux';
import TodoFilter from "../components/TodoFilter";

const mapStateToProps = state => {
  return {
    filterValue: state.filter.filterValue,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onFilterChange : (e) => dispatch({
      type : 'FILTER_CHANGED',
      payload: e.target.value,
    })
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter)