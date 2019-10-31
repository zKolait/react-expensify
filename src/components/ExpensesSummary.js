// Imports
import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../redux/selectors/expenses'
import selectExpensesTotal from '../redux/selectors/expenses-total'
import numeral from 'numeral'



// Component
const ExpensesSummary = ({ expenseTotal, expenseCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const expenseTotalFormatted = numeral(expenseTotal / 100).format('$0,0.00')

    return (
        <div className="expenses--summary">
            <h2>
                Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{expenseTotalFormatted}</span>
            </h2>
        </div>
    )
}




// Store and export
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)





