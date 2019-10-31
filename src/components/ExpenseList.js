// Imports
import React from 'react'
import { connect } from 'react-redux'
// Components Imports
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../redux/selectors/expenses'


// Component
const ExpenseList = (props) => (
    <div className="expense--list">
        <h2>Expense List</h2>
        <div>
            { props.expenses.map((expense) => (
                <ExpenseListItem 
                    {...expense} 
                    key={expense.id} 
                />
            )) }
        </div>
    </div>
)



// Redux Connected Component Export
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    }
}

export default connect(mapStateToProps)(ExpenseList)
