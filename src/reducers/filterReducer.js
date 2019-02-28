const initialState = {
  filterValue: '',
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_CHANGED':
      return {
        ...state,
        ...{filterValue: action.payload}
      };
    default:
      return state
  }
}

export default filterReducer;