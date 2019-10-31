// Improts
import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../redux/actions/auth'



// Component
const LoginPage = ({ startLogin }) => (
    <div className="background--container black">
        <div className="background--container__blur--filter opacity--filter"></div>
        <div className="login--page__container">
            <h1>Expensify</h1>
            <p>Get your expenses under control.</p>
            <button onClick={startLogin}>Login</button>
        </div>
    </div>
)



// Export
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)