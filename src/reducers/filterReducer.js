import update from 'immutability-helper';

const initialState = {
  filterValue: '',
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_CHANGED':
      return update(state, {
        $merge: {
          filterValue: action.payload,
        }
      });
    default:
      return state
  }
}

export default filterReducer;