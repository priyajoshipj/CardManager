import Header from "./component/Header";
import NewCard from "./component/NewCard";
import Card from "./component/Card";
import React, { useState, useEffect } from "react";

function App() {

  const [card, setCard] = useState([
    {
      cardId: 1,
      heading: "This is dummy heading 1",
    },
    {
      cardId: 2,
      heading: "This is dummy heading 2",
    }
  ]);
  const [task, setTask] = useState([
    {
      cardId: 1,
      taskId: "c-" + Math.random().toString(36).slice(2),
      title: "card data 1"
    },
    {
      cardId: 1,
      taskId: "c-" + Math.random().toString(36).slice(2),
      title: "card data 2"
    },
    {
      cardId: 2,
      taskId: "c-" + Math.random().toString(36).slice(2),
      title: "card data"
    },
  ]);

  const handler = (data, id) => {
    if (id == "_cardID") {
      let arr = [...card]
      arr.push(data)
      setCard(arr)
    } else if (id == "_taskID") {
      let arr = [...task]
      arr.push(data)
      setTask(arr)
    }
  }

  const deleteHandler = (data) => {
    let arr = [...card]
    setCard(arr.filter((x) => x.cardId != data))
  }

  const deleteTask = (data) => {
    console.log(data)
    let arr = [...task]
    setTask(arr.filter((x) => x.taskId != data))
    console.log(" >>> ", task)
  }

  const updateTask = (data, inp) => {
    console.log("update", data, inp)
    let arr = [...task]
    arr = arr.map((val) => {
      if (val.taskId == data) {
        val.title = inp;
        return val
      } else {
        return val
      }
    })
    setTask(arr)
  }

  return (
    <>
      <Header />
      <main className="main-area">
        <div className="centered">
          <NewCard classes={"card"} placeholder={"Add New Card"} btnId="_cardID"
            handler={handler}
          />
          <section className="cards">
            <Card updateTask={updateTask} deleteTask={deleteTask} card={card} task={task} deleteHandler={deleteHandler} handler={handler} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
