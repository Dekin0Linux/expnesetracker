import React from 'react'

function Expenses() {
  return (
    <tr className='text-center font-semibold text-slate-600'>
        <td className='py-4'>shirt</td>
        <td>200</td>
        <td>12:25</td>
        <td><button className='bg-green-400 px-2 rounded-full'>Grocries</button></td>
        <td>Delete</td>
    </tr>
  )
}

export default Expenses