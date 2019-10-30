// Improts
import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../redux/actions/auth'



// Component
const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
)



// Export
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)