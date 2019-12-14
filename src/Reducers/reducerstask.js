import {
  ADD_Task,
  DELET_Task,
  CHeked_task,
  Edite_Task,
  SHOW_TASK
} from "../Action/Action-type";
const initState = [];

export const reducerstask = (state = initState, action) => {
  switch (action.type) {
    case ADD_Task:
      return [...state, action.payload];
    case DELET_Task:
      return state.filter(el => el.key !== action.payload);
    case CHeked_task:
      return state.map(el =>
        el.key === action.payload ? { ...el, checked: !el.checked } : el
      );
    case Edite_Task:
      return state.map(el =>
        el.key === action.index ? { ...el, text: action.payload } : el
      );
    case SHOW_TASK:
      // console.log(action.payload.key)
      return state.map(el =>
        el.key === action.payload ? { ...el, edit: !el.edit } : el
      );

    default:
      return state;
  }
};
