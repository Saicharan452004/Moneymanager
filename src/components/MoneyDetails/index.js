// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, expenses, income} = props
  return (
    <div className="total-containers">
      <div className="container-1">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image-money"
          />
        </div>
        <div className="description-container">
          <p className="amount-description">Your balance</p>
          <p className="display-description" data-testid="balanceAmount">
            Rs. {balance}
          </p>
        </div>
      </div>
      <div className="container-2">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image-money"
          />
        </div>
        <div className="description-container">
          <p className="amount-description">Your Income</p>
          <p className="display-description" data-testid="incomeAmount">
            Rs. {income}
          </p>
        </div>
      </div>
      <div className="container-3">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image-money"
          />
        </div>
        <div className="description-container">
          <p className="amount-description">Your Expenses</p>
          <p className="display-description" data-testid="expensesAmount">
            Rs. {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
