import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Redirect, Route,Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.css';
import DetailPage from "./components/UserDetail";
import  Home  from "./components/Home"
import  reducer  from "./Redux/reducer"

let store = createStore(reducer,  composeWithDevTools(
    applyMiddleware(promiseMiddleware()),
  ))
class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:login" component={DetailPage} />
                <Redirect path="*" to="/" />
                </Switch>
            </BrowserRouter>
            </Provider>
        );
    }
}

render(<App />, window.document.getElementById('app'));