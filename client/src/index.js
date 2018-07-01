import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Feature from './components/Feature';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import reducers from './reducers';



const store = createStore(reducers, {
    auth: { authenticated: localStorage.getItem('token')}
}, applyMiddleware(reduxThunk));

const app = <Provider store={store} >
                <BrowserRouter>
                    <App>
                        <Route path='/signup' component={Signup} />
                        <Route path='/signout' component={Signout} />
                        <Route path='/signin' component={Signin} />
                        <Route path='/feature' component={Feature} />
                        <Route path='/' exact component={Welcome} />
                    </App>
                </BrowserRouter>
            </Provider>
ReactDOM.render(app, document.getElementById("root"));
