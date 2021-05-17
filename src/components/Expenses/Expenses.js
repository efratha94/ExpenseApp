import "./Expenses.css"
import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter"
import Card from "../UI/Card"


const Expenses = (props) => {
    const [ filteredYear, setfilteredYear ] = useState('2020')

    const filterChaangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
    }

    return (
            <Card className="expenses">
                <ExpenseFilter onChangeFilter={filterChaangeHandler} selected={filteredYear}/>
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/>
            </Card>
    )
}

export default Expenses