import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isForm, setIsForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsForm(false)
  };

  const renderFormHandler = () => {
    setIsForm(true);
  };

  const stopEditingHandler = () => {
    setIsForm(false)
  }

  return (
    <div className="new-expense">
      {isForm ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={stopEditingHandler} />
      ) : (
        <button onClick={renderFormHandler}>Add new expense</button>
      )}
    </div>
  );
}
export default NewExpense;
