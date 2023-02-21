import React, { Component } from 'react'
import "./ExpenseItem.css"

export default class ExpenseItem extends Component {
  render() {
    const {expenseTitle, expenseAmount, deleteExpense, editExpense} = this.props;
    return (
      <li className='expenses expense-item'>
        <p className='td1'>{expenseTitle}</p>
        <p className='td2'>₦ {expenseAmount}</p>
        <p className='expense-item-icons'>
            <span className='expense-item-icon'
              onClick={editExpense}
            >
              <i className="fas fa-pen" /></span>
            <span className='expense-item-icon1'
              onClick={deleteExpense}
            >
              <i className="fas fa-trash" />
            </span> 
        </p>        
      </li>
    )
  }
}
