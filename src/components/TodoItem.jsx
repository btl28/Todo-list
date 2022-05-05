import React, {useState} from "react";

function TodoItem(props) {
    const [isDone, setIsDone] = useState(false);

    function handleDelete() {     
        props.onDelete(props.id);
    }

    function handleComplete() {
        setIsDone(!isDone);
    }

    return (

        <div className="item">
            <div className={isDone ? "done" : "not-done"}>
                <p>{props.note}</p>
                <button onClick={handleComplete} style={isDone ? { backgroundColor: "grey", color: "white" } : { backgroundColor: "white", color: "rgb(20, 199, 94)" }}><i className="fa-solid fa-check"></i></button>
                <button style={isDone ? { backgroundColor: "grey", color: "white" } : { backgroundColor: "white", color: "rgb(121, 121, 121)" }} onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    );
}

export default TodoItem;