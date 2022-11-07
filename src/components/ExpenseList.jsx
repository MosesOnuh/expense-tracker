import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'
import "./ExpenseList.css"

export default class ExpenseList extends Component {
  render() {
    const { userExpense, deleteExpense, editExpense } =  this.props
    return (
      // <ul className='expense-list-body'> 
      //   <li className='expense-item-title'>
      //     <p>Title</p>
      //     <p>Amount</p>
      //     {/* <div className='expense-item-icons'>
      //         <span className='expense-item-icon'><i className="fas fa-pen" /></span>
      //         <span className='expense-item-icon1'><i className="fas fa-trash" /></span> 
      //     </div> */}
          
      //   </li>  
      //   {userExpense.map((expense) =>{
      //     return <ExpenseItem key={expense.id} expenseTitle={expense.title} expenseAmount={expense.amount} deleteExpense={()=>deleteExpense(expense.id)} editExpense={()=>editExpense(expense.id)}/>
      //   })}
            
        
      // </ul>
      <div className='expense-list-body'>
        <table className='expense-table'> 
          <tr className='expense-item-title'>
            <th>Expense Title</th>
            <th>Expense Value</th>
            <th className='icon-header'>Expense icons</th>          
          </tr>  
          {userExpense.map((expense) =>{
            return <ExpenseItem key={expense.id} expenseTitle={expense.title} expenseAmount={expense.amount} deleteExpense={()=>deleteExpense(expense.id)} editExpense={()=>editExpense(expense.id)}/>
          })}
      </table>
      </div>
      
    )
  }
}
