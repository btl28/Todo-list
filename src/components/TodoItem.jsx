import React from "react";

function TodoItem(props) {
    return (

        <div className="item">
            <p>{props.note}</p>       
        </div>
    );
}

export default TodoItem;