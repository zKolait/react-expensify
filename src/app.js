// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Store General
import configureStore from './redux/store/configueStore'
// Store Imports
import { startSetExpenses } from './redux/actions/expenses'

// Style
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// Router import
import AppRouter from './routers/AppRouter'

// DB Imports
import './firebase/firebase'


// Components
// Main app component here
const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



// Render
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})