import React, { Component } from 'react'
import "./Result.css"

export default class Result extends Component {
  render() {
    return (
      <div className='result-body'>
        <div className='result-container expenses'>
          <div className='item'>
              <p>Income</p>
              <i class="fa fa-money-bill-alt fa-4x text-info mt-1 mb-1"></i>
              <p>{` ₦ ${this.props.income}`}</p>
          </div>
          <div className='item'>
              <p>Expenses</p>
              <i class="far fa-credit-card fa-4x text-info mt-1 mb-1"></i>
              <p>{`₦ ${this.props.expenseSum}`}</p>
          </div>
          <div className='item'>
              <p>Balance</p>
              {/* <i class="fa-sharp fa-solid fa-naira-sign"></i> */}
              <i class="fa fa-naira fa-4x text-info mt-1 mb-1"></i>
              <p>{`₦ ${this.props.balance}`}</p>
          </div>
        </div>
     </div>
      
    )
  }
}
