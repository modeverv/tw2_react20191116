import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import './index.css';
import App from './components/pages/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route, Switch} from 'react-router-dom'

const enhancer = applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/fav" component={App}></Route>
    </Switch>
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
