// Imports
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'



// Component
const DashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)



// Export
export default DashboardPage