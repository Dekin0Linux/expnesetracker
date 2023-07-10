import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import expense from '../store/expense';


function Budgets({budget}) {
  const budgets = useSelector(state=>state.expense.budgets)
  const expenses = useSelector(state=>state.expense.expenses)
  // const totalExpense = 0

  expenses.forEach(expense =>{
    if(budget.category == expense.budget){
        console.log('amount')
    }
  })

  return (
    <div className='p-5 border-green-600 border-2 rounded-lg w-1/2'>
        <div className='flex justify-between flex-wrap'>
            <p className='text-xl font-semibold text-green-600 capitalize'>{budget.category}</p>
            <p className='font-semibold text-xl'>GHC {budget.amount} Budgeted</p>
        </div>

        <div className='flex justify-between flex-wrap'>
            <p>$ 20000 spent</p>
            <p>GHC 10000 Remaining</p>
        </div>
    </div>
  )
}

export default Budgets