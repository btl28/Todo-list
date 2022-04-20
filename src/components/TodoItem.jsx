import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem(props) {
    const [isDone, setIsDone] = useState(false);

    function handleDelete() {     
        props.onDelete(props.id);
    }

    function handleClick() {
        setIsDone(!isDone);
    }

    var style = { backgroundColor: "#8f8f8f", color: "white", textDecoration: "line-through"};

    return (

        <div onClick={handleClick} style={isDone ? style : null} className="item">
            <p>{props.note}</p>
            <button style={isDone ? style : null} onClick={handleDelete}><DeleteIcon /></button>
        </div>
    );
}

export default TodoItem;