import React, { useEffect, useState } from "react"

const List = ({ taskItem, cardId, deleteTask, updateTask }) => {
    const [toggle, setToggle] = useState(false);
    const [inp, setInp] = useState("vnbvvb");

    const updateHandler = (taskId) => {
        if (toggle.length > 0) {
            updateTask(taskId, inp)
            setToggle(false)
        } else {
            setToggle(taskId);
        }
        setInp("")
    }

    return (
        taskItem && taskItem?.map((val) => {
            return (
                <li id={val.taskId} key={val.taskId} cardId={val.cardId}>
                    {val.taskId == toggle ?
                        <input value={inp} onChange={(e) => setInp(e.target.value)} type="text" classes="new-task" style={{ width: "80%" }} />
                        : val.title}
                    &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-trash-o" onClick={() => deleteTask(val.taskId)}></i>
                    {val.taskId == toggle ? <i className="fa fa-save" onClick={() => updateHandler(val.taskId)}></i> : <i className="fa fa-pencil" onClick={() => updateHandler(val.taskId)}></i>}
                </li>
            )
        })
    )




}

export default List