import {
  ADD_Task,
  DELET_Task,
  CHeked_task,
  Edite_Task,
  SHOW_TASK
} from "./Action-type";

export const add_task = payload => {
  return {
    type: ADD_Task,
    payload
  };
};

export const Dele_task = payload => {
  return {
    type: DELET_Task,
    payload
  };
};

export const Cheked_task = payload => {
  return {
    type: CHeked_task,
    payload
  };
};
export const Edite_task = (payload, index) => {
  return {
    type: Edite_Task,
    payload,
    index
  };
};
export const showTask = payload => {
  return {
    type: SHOW_TASK,
    payload
  };
};
