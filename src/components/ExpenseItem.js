import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  // Dummy Data - Dynamic Placeholders
  //   const expenseDate = new Date(2023, 2, 24)
  //   const expenseTitle = "Car Insurance"
  //   const expenseAmount = 294.67
  // Normal JS to Components. Utilizing Date Methods to make things cleaner and concise. Separate complicated code to the return outputs in order to have a clean code.

  return (
    <div className="expense-item">
      {/* <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div> */}
      {/* <div>{props.date.toDateString()}</div> */}
      <ExpenseDate date={props.date}/> {/* This is a separate component */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
