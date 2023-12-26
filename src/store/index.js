import {createStore} from "redux";
import {rootReducer} from "./root-reducer";


const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__())

export {store}