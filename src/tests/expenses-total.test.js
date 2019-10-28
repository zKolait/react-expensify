// Imports
import selectExpensesTotal from '../redux/selectors/expenses-total'
import moment from 'moment'



// Expenses
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]



test('Should return 0 if no expenses', () => {
    const total = selectExpensesTotal([])
    expect(total).toBe(0)
})

test('Should return 195 for the first expense', () => {
    const total = selectExpensesTotal([expenses[0]])
    expect(total).toBe(195)
})

test('Should return the correct sum of amounts', () => {
    const total = selectExpensesTotal(expenses)
    expect(total).toBe(114195)
})