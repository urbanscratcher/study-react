import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 10.33,
    date: new Date(2020, 2, 26),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 285.33,
    date: new Date(2021, 2, 27),
  },
  {
    id: "e3",
    title: "TV",
    amount: 1200,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 140,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

// Instead of Imperative Style...
// const p = document.createElement("p");
// parseFloat.textContent = "This is also visible";
// document.getElementById('root').append(para);
// document.getElementById('root').innerHTML('some content');
// -> React uses Declarative Style

// Under the Hood...
// JSX 이전에는 이런 식으로 React를 import 했어야 함
// import React from "react";
// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "", ""),
//   React.createElement(Expenses, { items: expenses })
// );
