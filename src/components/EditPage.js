// Imports
import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../redux/actions/expenses'



// Component
const EditPage = (props) => (
    <div>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(
                        props.expense.id,
                        expense
                    )
                )

                props.history.push('/')
            }
        }
        />
        <button 
            onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }))

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