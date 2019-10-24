// Imports
import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount  } from '../redux/actions/filters'



// Components
const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={
                (e) => (props.dispatch(setTextFilter(e.target.value)))
            } 
        />
        <select 
            value={props.filters.sortBy}
            onChange={
                (e) => {
                    e.target.value == 'amount' ? 
                    (props.dispatch(sortByAmount())) : 
                    (props.dispatch(sortByDate()))
                }
            }>
            <option value="amount">Amount</option>
            <option value="date">Date</option>
        </select>
    </div>
)



// Export and Store connection
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)