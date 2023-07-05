import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    budgets: [],
    expenses : []
}

export const expenseSlice = createSlice({
    name:'expense',
    initialState,

    reducers:{
        addBudget:(state,action)=>{
            state.budgets.push(action.payload)
            console.log(action.payload)
        },
        addExpense:(state,action)=>{
            state.expenses.push(action.payload)
            console.log(action.payload)
        }
    }
})

export const {addBudget,addExpense} = expenseSlice.actions

export default expenseSlice.reducer