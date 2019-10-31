// Imports
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'




// Component
const ExpenseListItem = ({ description, amount, createdAt, id}) => (
    <div className="expense--item">
        <h3>{description}</h3>
        <div className="expense--item__details">
            <p>
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
            <p className="expense--item__amount">
                {numeral(amount / 100).format('$0,0.00')} 
            </p>
            <Link to={'/edit/' + id} className="expense--item__edit--button">
                <FontAwesomeIcon icon={faEdit} />
            </Link>
        </div>
    </div>
)



// Export and Store connection
export default ExpenseListItem