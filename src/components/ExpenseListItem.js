// Imports
import React from 'react'
import { Link } from 'react-router-dom'



// Component
const ExpenseListItem = ({ description, amount, createdAt, id}) => (
    <div>
        <Link to={'/edit/' + id}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)



// Export and Store connection
export default ExpenseListItem