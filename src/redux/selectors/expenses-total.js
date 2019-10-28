// Return amount of expenses provided
export default (expenses = undefined) => {
    return expenses
        .map((expense) => (expense.amount))
        .reduce((total, current) => total + current, 0)
}