import React, { useState } from "react"

const NewCard = ({ classes, placeholder, btnId, handler, type }) => {
    const [inp, setInp] = useState("")
    const btnSave = (e, _btnID) => {
        if (inp) {
            if (_btnID == "_cardID") {
                let obj = {
                    cardId: Math.random().toString(36).slice(2),
                    heading: inp,
                }
                handler(obj, _btnID)
            } else if (_btnID == "_taskID") {
                let obj = {
                    cardId: type,
                    taskId: "c-" + Math.random().toString(36).slice(2),
                    title: inp
                }
                handler(obj, _btnID)
            }
            setInp("")
        } else {
            alert("Please enter some value")
        }
    }
    return (
        <section className="new-card">
            <article className={classes}>
                <input placeholder={placeholder} value={inp} onChange={(e) => { setInp(e.target.value) }} type="text" className="txt-type" />
                <button onClick={(e) => { btnSave(e, btnId) }} > <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </article>
        </section>
    )
}

export default NewCard