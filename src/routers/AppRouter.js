// Imports
import React from 'react'
import { Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Components
import AddExpensePage from '../components/AddExpensePage'
import DashboardPage from '../components/DashboardPage'
import EditPage from '../components/EditPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'



export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)



export default AppRouter
