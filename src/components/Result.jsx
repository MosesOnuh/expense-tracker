import React, { Component } from 'react'
import "./Result.css"

export default class Result extends Component {
  render() {
    return (
      <div className='result-body'>
        <div>
            <p>Income</p>
            <p>{`N ${this.props.income}`}</p>
        </div>
        <div>
            <p>Expenses</p>
            <p>{`N ${this.props.expenseSum}`}</p>
        </div>
        <div>
            <p>Balance</p>
            <p>{`N ${this.props.balance}`}</p>
        </div>
      </div>
    )
  }
}
