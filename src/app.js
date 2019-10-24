// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

// Store General
import configureStore from './redux/store/configueStore'
// Store Imports
import { addExpense } from './redux/actions/expenses'
import { setTextFilter } from './redux/actions/filters'
import getVisibleExpenses from './redux/selectors/expenses'

// Style
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// Router import
import AppRouter from './routers/AppRouter'



// Components
// Main app component here
const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 10, createdAt: 50 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 7510, createdAt: 10 }))
store.dispatch(addExpense({ description: 'Rent', amount: 4510, createdAt: 20 }))
store.dispatch(setTextFilter('Water bill'))

const state = store.getState()



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



// Render
ReactDOM.render(jsx, document.getElementById('app'))