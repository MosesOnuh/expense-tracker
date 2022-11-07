import React, { Component } from 'react'
import "./ExpenseItem.css"

export default class ExpenseItem extends Component {
  render() {
    const {expenseTitle, expenseAmount, deleteExpense, editExpense} = this.props;
    return (
      <tr className=''>
        <td className='td1'>{expenseTitle}</td>
        <td className='td2'>₦ {expenseAmount}</td>
        <td className='expense-item-icons'>
            <span className='expense-item-icon'
              onClick={editExpense}
            >
              <i className="fas fa-pen" /></span>
            <span className='expense-item-icon1'
              onClick={deleteExpense}
            >
              <i className="fas fa-trash" />
            </span> 
        </td>        
      </tr>
    )
  }
}
