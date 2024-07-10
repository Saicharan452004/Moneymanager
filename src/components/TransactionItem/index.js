// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {title, optionId, amount, id, displayText} = details
  const onDeleteTransaction = () => {
    deleteTransaction(id, optionId, amount)
  }
  return (
    <li className="list-transaction">
      <p className="list-description">{title}</p>
      <p className="list-description">{amount}</p>
      <p className="list-description">{displayText}</p>
      <button className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="list-delete"
          onClick={onDeleteTransaction}
          data-testid="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
