import "./ExpenseForm.css"
import {useState} from 'react';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        title: "",
        amount: "",
        date: ""
    })
    const titleChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...userInput,
                title: e.target.value,
            }
        });
    }

    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...userInput,
                amount: e.target.value,
            }
        });
    }

    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...userInput,
                date: new Date(2022, 2, 2),
            }
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSaveExpenseData(userInput);
        setUserInput({
            title: "",
            amount: "",
            date: ""
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Number</label>
                    <input type="number" value={userInput.amount} min="0.1" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.date}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;