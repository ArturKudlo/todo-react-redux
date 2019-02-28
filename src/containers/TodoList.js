import {connect} from 'react-redux';
import TodoList from "../components/TodoList";

const mapStateToProps = state => {
  return {
    items : state.todo.todoItems,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onItemComplete : (id) => dispatch({
      type : 'ON_ITEM_COMPLETE',
      payload: id,
    })
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)