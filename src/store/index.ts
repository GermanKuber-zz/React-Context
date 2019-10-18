import { combineReducers } from "redux";
import { loadingReducer } from "./loading/reducers";

const rootReducer = combineReducers({
  loading: loadingReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
