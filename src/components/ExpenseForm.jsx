import React, { Component } from 'react'
import Button from './Button';
import "./ExpenseForm.css";

export default class ExpenseForm extends Component {
  render() {
    return (
      <div className='expense-form-body' >    
        <form className='expense-form' onSubmit={this.props.getExpense}>
            <div>
                <label htmlFor='expense-title'>Please Enter Your Expense Title</label>
                <input 
                type="text" 
                id="expense-title"
                placeholder='Enter Expense Title'
                className='expense-input'
                value={this.props.tempExpenseTitle}
                onChange={this.props.changeExpenseTitleHandler}
                required
                />
            </div>
            <div>
                <label htmlFor='expense-amount'>Please Enter Your Expense Amount</label>
                <input 
                type="number" 
                id="expense-amount"
                placeholder='Enter Expense Amount'
                className='expense-input'
                value={this.props.tempExpenseAmount}
                onChange={this.props.changeExpenseAmountHandler}
                required
                />
            </div>
             <Button className="expense-button"
             type="submit"
             >Add Expense</Button>        
        </form>
    </div>
    )
  }
}
