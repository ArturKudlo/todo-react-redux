const initialState = {
  todoItems: [
    {id: 1, name: 'Item cat 1', completed: false},
    {id: 2, name: 'Item dog 2', completed: true},
    {id: 3, name: 'Item cat dog map 3', completed: false},
  ]
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ON_ITEM_COMPLETE':
      let newList = state.todoItems.slice();
      newList.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = true;
        }
      });

      return {
        ...state,
        ...{todoItems: newList}
      };
    case 'FILTER_CHANGED':
      let itemsList = [];
      if (!action.payload) {
        itemsList = initialState.todoItems;
      } else {
        state.todoItems.forEach((item) => {
          if (item.name.includes(action.payload)) {
            itemsList.push(item);
          }
        });
      }

      return {
        ...state,
        ...{todoItems: itemsList}
      };
    default:
      return state
  }
}

export default todoReducer;