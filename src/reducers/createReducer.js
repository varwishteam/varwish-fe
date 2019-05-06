import { WISHLIST, CATEGORY } from '../actions';

const ACTIONS = {
  WISHLIST,
  CATEGORY,
};

export default function createReducer(entityName) {
  return function reducer(state = {}, action) {
    switch (action.type) {
      case ACTIONS[entityName].CREATE.SUCCESS:
        return [...state, action.payload];

      case ACTIONS[entityName].GET_ALL.SUCCESS:
        return action.payload;

      case ACTIONS[entityName].GET.SUCCESS:
        return [
          ...state.filter(entity => entity.id !== action.payload.id),
          action.payload,
        ];

      case ACTIONS[entityName].UPDATE.SUCCESS:
        return [
          ...state.filter(entity => entity.id !== action.payload.id),
          action.payload,
        ];

      case ACTIONS[entityName].DELETE.SUCCESS:
        return [...state.filter(entity => entity.id !== action.payload)];

      default:
        return state;
    }
  };
}
