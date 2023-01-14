import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {

    const [year, setYear] = useState("2020");

    const changeYear = (year) => {
        setYear(year);
        console.log(year);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={year} selectYear={changeYear}/>
                {props.items.map((expense) =>
                    <ExpenseItem title={expense.title} amount={expense.amount}
                                 date={expense.date}></ExpenseItem>
                )}
            </Card>
        </div>
    );
}

export default Expenses;