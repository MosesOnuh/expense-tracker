import React, { Component } from 'react'
import Button from './Button';
import "./IncomeForm.css";

export default class IncomeForm extends Component {
  render() {
    const { tempIncome, changeHandler, calculateIncomeHandler, resetIncomeHandler} = this.props;
    return (
      <div className='income-form-body' > 
        <p>Please Enter Your Income</p>
        <p>Click reset to reset income to zero</p>
        <form onSubmit={calculateIncomeHandler} >
            <input type="number" 
            placeholder='Enter Amount'
            className='income-input'
            onChange={changeHandler}
            value={tempIncome}
            required
            />
            <div className='income-button-set'>
             <Button
             onClick={calculateIncomeHandler}
              type="submit"
             >Calculate</Button>
             <p
             className="reset-btn"
              onClick={resetIncomeHandler}
             >Reset</p>
            </div>
            
        </form>
    </div>
    )
  }
}
