import "./Expenses.css"
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpenseFilter from "./ExpenseFilter"
import Card from "../UI/Card"


const Expenses = (props) => {
    const [ filteredYear, setfilteredYear ] = useState('')

    const filterChaangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (
            <Card className="expenses">
                <ExpenseFilter onChangeFilter={filterChaangeHandler} selected={filteredYear}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
    )
}

export default Expenses