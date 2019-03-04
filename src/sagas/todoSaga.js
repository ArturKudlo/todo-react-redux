import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import todoService from "../services/todoService";

function* fetchClaimedRewards() {
  let items = yield call(todoService.getItems);
  yield put({type: 'FETCH_COMPLETED', payload: {items}});
}

function* onItemComplete(action) {
  let items = yield select(state => state.todo.todoItems);
  let changedItem;
  items.forEach((item) => {
    if (item.id === action.payload) {
      changedItem = Object.assign({}, item);
    }
  });

  changedItem.completed = true;
  yield call(todoService.changeItem, changedItem);
}

function* onNewSubmit() {
  let item = yield call(todoService.createItem, {
    name: yield select(state => state.todo.newNameValue),
    completed: yield select(state => state.todo.newCompleteValue),
  });
  yield put({
    type: 'CREATE_COMPLETED', payload: item,
  });
}

function* fetchTodosSaga() {
  yield takeLatest('FETCH_TODOS', fetchClaimedRewards);
}

function* onNewSubmitSaga() {
  yield takeLatest('ON_NEW_SUBMIT', onNewSubmit);
}

function* onItemCompleteSaga() {
  yield takeLatest('ON_ITEM_COMPLETE', onItemComplete);
}

export default function* rootSaga() {
  yield all([
    fetchTodosSaga(),
    onNewSubmitSaga(),
    onItemCompleteSaga(),
  ]);
};
