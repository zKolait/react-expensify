// Imports
import React from 'react'
import { connect } from 'react-redux'
// Components Imports
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../redux/selectors/expenses'


// Component
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
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
