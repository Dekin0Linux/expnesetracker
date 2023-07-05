import React from 'react'

function Budgets() {
  return (
    <div className='p-5 border-green-600 border-2 rounded-lg w-1/2'>
        <div className='flex justify-between flex-wrap'>
            <p className='text-xl font-semibold text-green-600'>Clothing</p>
            <p>GHC 20000 Budgeted</p>
        </div>

        <div className='flex justify-between flex-wrap'>
            <p>$ 20000 spent</p>
            <p>GHC 10000 Remaining</p>
        </div>
    </div>
  )
}

export default Budgets