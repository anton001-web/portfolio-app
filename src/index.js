import App from './app';
import ReactDOM from "react-dom";
import {createStore, compose} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
