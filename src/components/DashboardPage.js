// Imports
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'



// Component
const DashboardPage = () => (
    <div className="main--container">
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)



// Export
export default DashboardPage