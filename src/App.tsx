import { useState } from "react";
import "./App.css";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
//import ListGroup from "./components/ListGroup";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseTrackerList from "./expense-tracker/componenets/ExpenseTrackerList";
import ExpenseTrackerForm from "./expense-tracker/componenets/ExpenseTrackerForm";
import categories from "./expense-tracker/componenets/categories";

function App() {
  //  const [categories, setCategories] = useState();
  const [selectedFilter, setSelectedFilter] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "test1",
      amount: 10,
      category: "movie",
    },
    {
      id: 2,
      description: "test2",
      amount: 11,
      category: "cartoon",
    },
    {
      id: 3,
      description: "test3",
      amount: 12,
      category: "books",
    },
  ]);

  const visibleExpenses = selectedFilter
    ? expenses.filter((expense) => expense.category === selectedFilter)
    : expenses;

  const deleteExpense = (id: number) => {
    console.log(id);
    // setExpenses(
    //   produce((draft) => {
    //     draft.filter((expense) => expense.id !== id);
    //   })
    // );
    const filteredData = expenses.filter((expense) => expense.id !== id);
    setExpenses([...filteredData]);
  };

  const handleFormData = (data: any) => {
    // console.log(data);
    const newPost = { id: expenses.length + 1, ...data };
    setExpenses([...expenses, newPost]);
  };

  // const filterSelectedData = (event: any) => {
  //   event.preventDefault();
  //   console.log(event.target?.value);
  //   // setSelectedFilter(event.target?.value);
  //   //  console.log(expenses);
  //   // const fil = expenses.filter(
  //   //   (expense) => expense.category === selectedFilter
  //   // );
  //   // console.log(fil);
  //   setExpenses(
  //     expenses.filter((expense) => expense.category == event.taget?.value)
  //   );
  // };

  return (
    // <ListGroup
    //   items={items}
    //   heading="List"
    //   selectedIndex={selectdIndex}
    //   onSelectedItem={(index) => setSelectedIndex(index)}
    // />
    <>
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "Not Fixed"}
        </p>
      ))}
      <button onClick={handleClicl}> Button</button> */}
      {/* <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={clearCart} />
      <button onClick={pushItems}>Push</button>
      {game.player.name}
      <button onClick={handleClick}>update player name</button> */}
      {/* <ExpandableText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non expedita
        commodi earum nemo consequatur molestias, quibusdam harum odit ratione
        quis praesentium reprehenderit dolorum fuga sequi dolorem, esse dicta.
        Impedit molestias debitis facilis porro, eaque ipsa accusantium placeat
        nostrum culpa fugiat quo? Asperiores, magni provident eveniet voluptates
        distinctio rem repellendus, incidunt neque accusamus libero non labore
        modi nesciunt accusantium inventore esse possimus minus fugiat quod.
        Sapiente exercitationem sequi officia saepe pariatur placeat quam qui,
        aliquid culpa tenetur quos iste, enim consequatur reprehenderit est eum
        provident asperiores blanditiis rerum? Amet quo fugit quisquam eveniet
        consequuntur. Nostrum architecto quibusdam, labore beatae vel
        accusantium.
      </ExpandableText> */}
      {/* <Form></Form> */}
      <>
        <ExpenseTrackerForm
          categories={categories}
          formSubmit={(data) => handleFormData(data)}
        />
        <div className="mb-3">
          <label htmlFor="categoryFilter" className="form-label"></label>
          <select
            onChange={(event) => setSelectedFilter(event.target.value)}
            id="categoryFilter"
            className="form-select"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <ExpenseTrackerList
          expenses={visibleExpenses}
          onDelete={(id) => deleteExpense(id)}
        />
      </>
    </>
  );
}

export default App;
