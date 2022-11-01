import React, { Component } from 'react'
import './App.css';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import Result from './components/Result';
import ItemWrapper from './components/ItemWrapper';
// import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import {v4 as uuid} from "uuid";

class App extends Component {
  state = {
    income: 0,
    tempIncome: "",
    tempExpenseTitle: "",
    tempExpenseAmount: "",
    expenseSum: 0,
    balance: 0,
    userExpense: [],  // [{expenseItem: "beans", expenseAmount: 400}, {expenseItem: "rice", expenseAmount: 300}]
    // expenseTitle: "",
    // expenseAmount: 0,
  }

  // componentDidUpdate(){
    // this.calculateExpenseSum(); 
    // this.calculateBalance();
// }
  
  changeHandler = (event) =>{
    this.setState(() => {
      return {tempIncome: event.target.value};
    })
  }

  calculateIncomeHandler = (event) =>{
    event.preventDefault();

    const newIncome = parseInt(this.state.tempIncome || 0) + this.state.income
    this.setState(() => {
      return {
        income: newIncome,
        tempIncome: ""
      }},this.calculateExpenseSum());
  }


  resetIncomeHandler = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {income: 0};
    });
  }

  getExpense = (event) => {
    event.preventDefault();
    const amount = parseInt(this.state.tempExpenseAmount);
    const expenseObject = {id: uuid(), title: this.state.tempExpenseTitle, amount: amount};
    const storedExpense = localStorage.getItem("userExpenses")

    if ( storedExpense === null) {
      const expenseArray =[]
      expenseArray.push(expenseObject)
      localStorage.setItem("userExpenses",  JSON.stringify(expenseArray))
    } else {
      const localExpense = JSON.parse(storedExpense)
      localExpense.push(expenseObject)
      localStorage.setItem("userExpenses",  JSON.stringify(localExpense))
    }

    this.setState((previousState) =>{
      return {
        // userExpense: [...this.state.userExpense, {...expenseObject}],  
        // userExpense: [...previousState.userExpense, {...expenseObject}],  
        tempExpenseTitle: "",
        tempExpenseAmount: ""
      }}, this.calculateExpenseSum());
  }

  calculateExpenseSum = () => {
    const expenses = JSON.parse(localStorage.getItem("userExpenses")) 
    let sum = 0
      if (expenses !== null && expenses.length > 1) {
        expenses.forEach(expense=> sum += expense.amount)
      } else if (expenses !== null && expenses.length === 1) {
        sum += expenses[0].amount
      }else {
        sum = 0
      }

    localStorage.setItem("expenseSum", `${sum}`)
    // this.setState(() => {
    //   return { expenseSum: sum};
    // }, this.calculateBalance)
    this.calculateBalance()
  }

  calculateBalance = () => {
    console.log(this.state.expenseSum)
    const totalExpenses = localStorage.getItem("expenseSum") 
    const userBalance = (this.state.income) - (parseInt(totalExpenses))
    this.setState(() => {
      return {balance: userBalance};
    });
  }

  changeExpenseTitleHandler = (event) => {
    this.setState(() => {
      return {tempExpenseTitle: event.target.value};
    })
  }

  changeExpenseAmountHandler = (event) => {
    this.setState(() => {
      return {tempExpenseAmount: event.target.value}
    });
  }

  render() {
  return (
    <div className="App">   
      <ItemWrapper className="app-top-section">
        <IncomeForm  
          tempIncome={this.state.tempIncome} 
          changeHandler={this.changeHandler} 
          calculateIncomeHandler={this.calculateIncomeHandler} 
          resetIncomeHandler={this.resetIncomeHandler} 
        /> 
        <Result 
          income={this.state.income}
          expenseSum={this.state.expenseSum}
          balance={this.state.balance}
        />
      </ItemWrapper>
      <ItemWrapper className="app-top-section">
        <ExpenseForm 
          tempExpenseTitle={this.state.tempExpenseTitle}
          tempExpenseAmount={this.state.tempExpenseAmount} 
          getExpense={this.getExpense} 
          changeExpenseAmountHandler={this.changeExpenseAmountHandler}
          changeExpenseTitleHandler={this.changeExpenseTitleHandler}
        />
          <ExpenseList
            userExpense={this.state.userExpense} 
          />
      </ItemWrapper>
    </div>
  );
}
}
export default App;
