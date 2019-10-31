// Imports
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../redux/actions/auth'



// Component
export const Header = ({ startLogout }) => (
    <header>
        <NavLink to="/dashboard">
            <h1>Expensify</h1>
        </NavLink>
        <nav>
            <ul>
                <li>
                    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
                </li>
                <li>
                    <button onClick={startLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    </header>
)



// Export
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)

