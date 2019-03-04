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
    }),
    fetchTodos: () => dispatch({
      type: 'FETCH_TODOS',
    }),
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)