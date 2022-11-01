import React, { Component } from 'react'
import "./ExpenseItem.css"

export default class ExpenseItem extends Component {
  render() {
    const {expenseTitle, expenseAmount} = this.props;
    return (
      <li className='expense-item-list'>
        <p>{expenseTitle}</p>
        <p>{expenseAmount}</p>
        <div className='expense-item-icons'>
            <span className='expense-item-icon'><i className="fas fa-pen" /></span>
            <span className='expense-item-icon1'><i className="fas fa-trash" /></span> 
        </div>
        
      </li>
    )
  }
}
