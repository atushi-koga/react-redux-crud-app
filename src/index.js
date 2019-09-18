import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import thunk from "redux-thunk";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
// storeの中にthunkミドルウェアを組み込み、storeを作成する
// action creatorが関数を返す事ができるようになる
const store = createStore(reducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/events/new" component={EventsNew}/>
                <Route path="/events/:id" component={EventsShow}/>
                <Route exact path="/" component={EventsIndex}/>
                <Route exact path="/events" component={EventsIndex}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
