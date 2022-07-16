import React from "react";
import List from "./List";
import NewCard from "./NewCard";


const Card = (props) => {
    let { card, task, deleteHandler, handler, deleteTask, updateTask } = props;

    return (
        <>
            {
                card?.map((val) => {
                    return (
                        <article className="card" id={val.cardId} key={val.cardId}>
                            <center>
                                <h2>{val.heading}</h2>
                            </center>
                            <ul>
                                <List updateTask={updateTask} deleteTask={deleteTask} cardId={val.cardId} taskItem={task?.filter((x) => x.cardId == val.cardId)} />
                            </ul>
                            <NewCard handler={handler} type={val.cardId} classes="new-task" placeholder={"Add New Task"} btnId="_taskID" />
                            <center> <button type="button" onClick={() => { deleteHandler(val.cardId) }} id={val.cardId} className="delete-card"> Delete </button> </center>
                        </article>
                    )
                })
            }

        </>
    )
}

export default Card