// Imports
import React from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'

// Components
import AddExpensePage from '../components/AddExpensePage'
import DashboardPage from '../components/DashboardPage'
import EditPage from '../components/EditPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'




const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)



export default AppRouter
