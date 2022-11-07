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
    edit: false,
    editItem: {}
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

    const newIncome = parseInt(this.state.tempIncome || 0)
    this.setState({
      income: newIncome,
      tempIncome: ""
    },this.calculateBalance);
  }


  resetIncomeHandler = (event) => {
    event.preventDefault();
    this.setState({income: 0}, this.calculateBalance);
  }

  getExpense = (event) => {
    event.preventDefault();
    const {tempExpenseAmount, tempExpenseTitle, userExpense} = this.state
    const amount = parseInt(tempExpenseAmount);
    const expenseObject = {id: uuid(), title: tempExpenseTitle, amount: amount};
    
    if (this.state.edit === true){
      const stateExpenses = this.state.userExpense
      const editExpense = stateExpenses.find(expense => expense.id === this.state.editItem.id)   
      const expenseIndex = stateExpenses.indexOf(editExpense)

      const finalExpense = {...editExpense, title: tempExpenseTitle, amount: amount}
      stateExpenses[expenseIndex] = finalExpense

      this.setState({
        // userExpense: [...this.state.userExpense, {...expenseObject}],  
        userExpense: [...stateExpenses],  
        tempExpenseTitle: "",
        tempExpenseAmount: "",
        edit: false,
        editExpense: {}
      }, this.calculateExpenseSum);
      return
  }
      
    
    this.setState({
      // userExpense: [...this.state.userExpense, {...expenseObject}],  
      userExpense: [...userExpense, expenseObject],  
      tempExpenseTitle: "",
      tempExpenseAmount: ""
    }, this.calculateExpenseSum);
  }

  calculateExpenseSum = () => {
    // const expenses = 
    // let sum = 0
    //   if (this.state.userExpense.length > 1) {
    //     this.state.userExpense.forEach(expense=> sum += expense.amount)
    //   } else if (this.state.userExpense.length === 1) {
    //     sum += this.state.userExpense[0].amount
    //   }else {
    //     sum = 0
    //   }

    const sum = this.state.userExpense?.reduce((a, b) => a + b.amount, 0)

    this.setState({expenseSum: sum}, this.calculateBalance)
  }

  calculateBalance = () => {
    const userBalance = (this.state.income) - (this.state.expenseSum)
    this.setState({balance: userBalance});
  }

  changeExpenseTitleHandler = (event) => {
    this.setState({tempExpenseTitle: event.target.value})
  }

  changeExpenseAmountHandler = (event) => {
    this.setState({tempExpenseAmount: event.target.value});
  }

  deleteExpense = id => {
    const filteredExpenses = this.state.userExpense.filter(expense => expense.id !== id)
  
    this.setState({
      userExpense: filteredExpenses
    }, this.calculateExpenseSum)
  }

  editExpense = id => {
    const editExpense = this.state.userExpense.find(expense => expense.id === id)
    

    this.setState({
      tempExpenseTitle: editExpense.title,
      tempExpenseAmount: editExpense.amount,
      edit: true,
      editItem: editExpense
    })
  }


  render() {
  return (
    <div className="app">   
    <h1>Welcome, let's help you track your expenses</h1>
    <h2>Expense tracker</h2>

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
            deleteExpense = {this.deleteExpense}
            editExpense = {this.editExpense}
          />
      </ItemWrapper>
    </div>
  );
}
}
export default App;
