// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Store General
import configureStore from './redux/store/configueStore'
// Store Imports

// Style
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// Router import
import AppRouter from './routers/AppRouter'



// Components
// Main app component here
const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



// Render
ReactDOM.render(jsx, document.getElementById('app'))