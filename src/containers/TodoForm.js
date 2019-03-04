import {connect} from 'react-redux';
import TodoForm from "../components/TodoForm";

const mapStateToProps = state => {
  return {
    newNameValue : state.todo.newNameValue,
    newCompleteValue : state.todo.newCompleteValue,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onNewNameChange : (e) => dispatch({
      type : 'ON_NEW_NAME_CHANGE',
      payload: e.target.value,
    }),
    onNewCompleteChange: (e) => dispatch({
      type: 'ON_NEW_COMPLETE_CHANGE',
      payload: e.target.checked,
    }),
    onNewSubmit: () => dispatch({
      type: 'ON_NEW_SUBMIT',
    }),
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)