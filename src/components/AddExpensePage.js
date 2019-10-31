// Imports
import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../redux/actions/expenses'



// Component
export class AddExpensePage extends React.Component {
    // Methods
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }


    // Render
    render () {
        return (
            <div className="main--container">
                <h2>Add Expense</h2>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}




// Export
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)