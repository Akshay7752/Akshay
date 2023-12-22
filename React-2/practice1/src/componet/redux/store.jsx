import { createStore , applyMiddleware} from "redux";
import { cake } from "./cake/Cake_reducer";
import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(cake , composeWithDevTools(applyMiddleware(logger)))

export default store
