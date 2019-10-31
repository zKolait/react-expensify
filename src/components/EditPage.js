// Imports
import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../redux/actions/expenses'



// Component
const EditPage = (props) => (
    <div className="main--container">
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(startEditExpense(
                        props.expense.id,
                        expense
                    )
                )

                props.history.push('/')
            }
        }
        />
        <button 
            className="remove__button"
            onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expense.id }))

                props.history.push('/')
            }}
        >
            Remove
        </button>
    </div>
)




// Export
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => ( props.match.params.id == expense.id ))
    }
}

export default connect(mapStateToProps)(EditPage)