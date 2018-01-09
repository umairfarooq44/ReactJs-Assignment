import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Redirect, Route,Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import DetailPage from "./components/UserDetail.container";
import  Home  from "./components/Home.container"
import  reducer  from "./Redux/reducer"
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/abc/:login" component={DetailPage} />
                <Redirect path="*" to="/" />
                </Switch>
            </BrowserRouter>
            </Provider>
        );
    }
}

render(<App />, window.document.getElementById('app'));