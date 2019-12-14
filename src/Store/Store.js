import { createStore } from "redux";
import { reducerstask } from "../Reducers/reducerstask";

const store = createStore(
  reducerstask,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
