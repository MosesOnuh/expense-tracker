import React, { Component } from 'react'
import Button from './Button';
import "./IncomeForm.css";

export default class IncomeForm extends Component {
  render() {
    const { tempIncome, changeHandler, calculateIncomeHandler, resetIncomeHandler} = this.props;
    return (
      <div className='form-container income-form-body' > 
        <form onSubmit={calculateIncomeHandler} >
          <label htmlFor="income-input">Please Enter Your Income</label>
          <small>Click reset to reset income to zero</small>
            <input type="number" 
            id='income-input'
            placeholder='Enter Amount'
            className='input-field income-input'
            onChange={changeHandler}
            value={tempIncome}
            required
            />
            {/* <div className='income-button-set'> */}
             <Button
             className="btn calculate-btn"
             onClick={calculateIncomeHandler}
              type="submit"
             >
              Calculate
             </Button>
             <button
             className="btn reset-btn"
             type='reset'
              onClick={resetIncomeHandler}
             >
              Reset
            </button>
            {/* </div> */}
            
        </form>
    </div>
    )
  }
}
