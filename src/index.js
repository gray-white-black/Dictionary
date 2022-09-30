import React from 'react';
import root from 'react-dom';
import App from './App';
import {compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter} from "react-router-dom";
const store = createStore(rootReducer, composeWithDevTools())

const app = (

    <Provider store={store}>
        <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
)
root.render(
    app,
    document.getElementById('root')
);

