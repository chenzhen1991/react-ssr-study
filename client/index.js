import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import routes from '../src/App'
import store from '../src/store/store'

const Page = (<Provider store={store}>
        <BrowserRouter>
        // {App}
            {routes.map(route => <Route {...route}></Route>)}
        </BrowserRouter>
    </Provider>);
ReactDom.hydrate(Page, document.getElementById('root'))