// Imports
import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../redux/actions/expenses'



// Component
const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <h3>Description: {description}</h3>
        <p>{amount} - {createdAt}</p>
        <button 
            onClick={() => (
                dispatch(removeExpense({id}))
            )}
        >
            Remove
        </button>
    </div>
)



// Export and Store connection
export default connect()(ExpenseListItem)