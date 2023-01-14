import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const App = () => {
    const DUMMY_EXPENSES = [
        {
            id: "e1",
            title: "toilet paper",
            amount: 54,
            date: new Date(2020, 2, 2)
        },
        {
            id: "e2",
            title: "Cabane",
            amount: 43,
            date: new Date(2020, 4, 23)
        }
    ]

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [...prevExpenses, expense];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
