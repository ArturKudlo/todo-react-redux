import update from 'immutability-helper';

const initialState = {
  todoItems: [],
  newNameValue: '',
  newCompleteValue: false,
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

      return update(state, {
        $merge: {
          todoItems: newList,
        }
      });
    case 'FETCH_COMPLETED':
      return update(state, {
        $merge: {
          todoItems: action.payload.items,
        }
      });
    case 'ON_NEW_NAME_CHANGE':
      return update(state, {
        $merge: {
          newNameValue: action.payload,
        }
      });
    case 'ON_NEW_COMPLETE_CHANGE':
      return update(state, {
        $merge: {
          newCompleteValue: action.payload,
        }
      });
    case 'CREATE_COMPLETED':
      let afterCreateList = state.todoItems.slice();
      afterCreateList.push(action.payload);

      return update(state, {
        $merge: {
          todoItems: afterCreateList,
          newNameValue: initialState.newNameValue,
          newCompleteValue: initialState.newCompleteValue,
        }
      });
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

      return update(state, {
        $merge: {
          todoItems: itemsList,
        }
      });
    default:
      return state
  }
}

export default todoReducer;