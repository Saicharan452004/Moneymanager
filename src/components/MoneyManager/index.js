import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    income: 0,
    balance: 0,
    expenses: 0,
    optionId: transactionTypeOptions[0].optionId,
    title: '',
    amount: '',
    transactionList: [],
  }
  addTransaction = event => {
    event.preventDefault()
    const {title, optionId, amount} = this.state
    const typeOption = transactionTypeOptions.find(
      eachItem => eachItem.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title,
      optionId,
      amount,
      displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      optionId: '',
      amount: '',
    }))
    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance + amount,
        income: prevState.income + amount,
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - amount,
        expenses: prevState.expenses + amount,
      }))
    }
  }
  onChangeType = event => {
    this.setState({optionId: event.target.vale})
  }
  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }
  onChangeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }
  deleteTransaction = (id, optionId, amount) => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(eachItem => id !== eachItem.id)
    this.setState({transactionList: filteredList})
    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income - amount,
        balance: prevState.balance - amount,
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - amount,
        balance: prevState.balance + amount,
      }))
    }
  }
  render() {
    const {
      income,
      balance,
      expenses,
      optionId,
      transactionList,
      title,
      amount,
    } = this.state
    console.log(transactionList)
    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="top-heading">Hi, Richard</h1>
          <p className="top-paragraph">
            Welcome back to your <span className="top-span">Money manager</span>
          </p>
        </div>
        <ul className="middle-container">
          <MoneyDetails income={income} balance={balance} expenses={expenses} />
        </ul>
        <div className="bottom-section">
          <form className="left-form" onSubmit={this.addTransaction}>
            <h1 className="form-heading">Add Transaction</h1>
            <label className="form-label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              placeholder="TITLE"
              id="title"
              className="form-input"
              onChange={this.onChangeTitle}
              value={title}
            />
            <label className="form-label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              placeholder="AMOUNT"
              id="amount"
              className="form-input"
              onChange={this.onChangeAmount}
              value={amount}
            />
            <label className="form-label" htmlFor="select">
              TYPE
            </label>
            <select
              className="form-input"
              id="select"
              name="types"
              value={optionId}
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(eachItem => (
                <option key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="right-form">
            <h1 className="form-heading">History</h1>
            <div className="history-container">
              <div className="main-heading">
                <p className="main-paragraph">Title</p>
                <p className="main-paragraph">Amount</p>
                <p className="main-paragraph">Type</p>
              </div>
              <hr className="line" />
              <ul className="list">
                {transactionList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    details={eachItem}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
