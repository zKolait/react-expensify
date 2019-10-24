// Imports
import React from 'react'
import { NavLink } from 'react-router-dom'



// Component
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
                </li>
                <li>                
                    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
                </li>
                <li>                
                    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)



// Export
export default Header