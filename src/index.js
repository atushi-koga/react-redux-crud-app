import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from './reducers';
import EventsIndex from './components/events_index';
import thunk from "redux-thunk";

// storeの中にthunkミドルウェアを組み込み、storeを作成する
// action creatorが関数を返す事ができるようになる
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <EventsIndex/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
