import React, { useState } from 'react'
import Budgets from './Budgets'
import { v4 as uuidv4 } from 'uuid';

function Main() {

    const [budget,setBudget] = useState({})
    const [expense,setExpense] = useState({})

    const handleBudgetSubmit = (e)=>{
        e.preventDefault()
        console.log({id:uuidv4(),...budget})
    }

    const handleExpense=(e)=>{
        e.preventDefault()
        console.log({id:uuidv4(),...expense})
    }


  return (
    <div className='container mx-auto'>
        <h3 className='font-bold text-5xl text-blue-600 my-4'>Welcome to Budjeti</h3>

        <div className='flex flex-wrap gap-10 my-10 items-start'>
            <div className='p-10 md:w-[50%] bg-white shadow-lg rounded-md border-orange-400 border-2'>
                <p className='font-semibold text-2xl'>Create Budget</p>
                
                <form onSubmit={handleBudgetSubmit}>
                    <div className='my-5'>
                        <label className='font-bold'>Budget Name</label>
                        <input type="text" onChange={(e)=>setBudget({...budget,category: e.target.value})} placeholder='Category' className='p-3 w-full border-slate-700 border-2 rounded-lg'/>
                    </div>
                    <div>
                        <label className='font-bold'>Amount</label>
                        <input type="number" onChange={(e)=>setBudget({...budget, amount: e.target.value})} placeholder='Amount' className='p-3 w-full border-slate-700 border-2 rounded-lg'/>
                    </div>
                    <button type='submit' className='my-5 bg-orange-400 p-3 text-white font-semibold rounded-md'>Create Budget</button>
                    {/* name , id , amount */}
                </form>
            </div>

            <div className='p-10 md:w-[45%] bg-white shadow-lg rounded-lg border-blue-400 border-2'>
            <p className='font-semibold text-2xl'>Add Expense</p>
            <form onSubmit={handleExpense}>
                    <div className='my-5'>
                        <label className='font-bold'>Expense Name</label>
                        <input type="text" onChange={(e)=>setExpense({...expense,expName:e.target.value})} placeholder='Category' className='p-3 w-full border-slate-700 border-2 rounded-lg'/>
                    </div>
                    <div className='flex flex-wrap md:gap-14 gap-5'>
                        <div className='w-full'>
                            <label className='font-bold'>Amount</label>
                            <input type="number" onChange={(e)=>setExpense({...expense,amount:e.target.value})} placeholder='Amount' className='p-3 w-full border-slate-700 border-2 rounded-lg'/>
                        </div>

                        <div className='w-full'>
                            <label className='font-bold'>Budget Category</label><br />
                            <select name=""  onChange={(e)=>setExpense({...expense,budget:e.target.value})} id="" className='p-3 w-full border-slate-700 border-2 rounded-lg'>
                                <option value="groceries">Grocries</option>
                                <option value="clothing">Clothing</option>
                                <option value="bills">Bills</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className='my-5 bg-blue-400 p-3 text-white font-semibold rounded-md'>Add Expense</button>
                    {/* name, budger_id,amount, id */}
                </form>
            </div>
        </div>

    {/* LIST OF BUSGETS */}
        <div>
            <h3>Exisiting Budget</h3>
            <div className="flex flex-wrap gap-5">
                <Budgets/>
            </div>
        </div>

        {/* LIST OF EXPENSES */}
        <div className='p-5'>
            <h3>Expenses List</h3>

            <div>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Budget</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    

                </table>
            </div>
        </div>

    </div>
  )
}

export default Main