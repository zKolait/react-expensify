// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Store General
import configureStore from './redux/store/configueStore'
// Store Imports
import { startSetExpenses } from './redux/actions/expenses'
import { login, logout } from './redux/actions/auth'

// Style
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// Router import
import AppRouter, { history } from './routers/AppRouter'

// DB Imports
import { firebase } from './firebase/firebase'

// Components
import LoadingPage from './components/LoadingPage'


// Main app component here
const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



// Render
let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}


ReactDOM.render(<LoadingPage />, document.getElementById('app'))


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))

        store.dispatch(startSetExpenses()).then(() => {
            renderApp()

            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())

        renderApp()

        history.push('/')
    }
})