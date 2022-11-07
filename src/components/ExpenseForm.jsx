import React, { Component } from 'react'
import Button from './Button';
import "./ExpenseForm.css";

export default class ExpenseForm extends Component {
  render() {
    return ( 
        <form className='form-container expense-form' onSubmit={this.props.getExpense}>
            {/* <div> */}
                <label htmlFor='expense-title' className='expense-title'>Please Enter Your Expense Title</label>
                <input 
                type="text" 
                id="expense-title"
                placeholder='Enter Expense Title'
                className='input-field expense-input'
                value={this.props.tempExpenseTitle}
                onChange={this.props.changeExpenseTitleHandler}
                required
                />
                <label htmlFor='expense-amount' className='expense-amount'>Please Enter Expense Amount</label>
                <input 
                type="number" 
                id="expense-amount"
                placeholder='Enter Expense Amount'
                className='input-field expense-input'
                value={this.props.tempExpenseAmount}
                onChange={this.props.changeExpenseAmountHandler}
                required
                />
             <Button className="btn expense-button"
             type="submit"
             >Add Expense</Button>        
        </form>
    // </div>
    )
  }
}
