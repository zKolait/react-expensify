// Imports
import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate  } from '../redux/actions/filters'

import { DateRangePicker } from 'react-dates'



// Component
class ExpenseListFilters extends React.Component {
    // State
    state = {
        calendarFocused: null,
    }



    // Methods
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }



    // Render
    render () {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={
                        (e) => (this.props.dispatch(setTextFilter(e.target.value)))
                    } 
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={
                        (e) => {
                            e.target.value == 'amount' ? 
                            (this.props.dispatch(sortByAmount())) : 
                            (this.props.dispatch(sortByDate()))
                        }
                    }>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}



// Export and Store connection
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)