import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

function InputArea(props){
    const [note, setNote] = useState("");

    function handleChange(event) {
        const value = event.target.value;
        setNote(value);
    }

    function handleSubmit(event) {
        props.addItem(note);
        setNote("");
        event.preventDefault();
    }

    return (
        <div>

            <form className="create-note">
                <input onChange={handleChange} value={note} placeholder="Add an item"/>
                <button onClick={handleSubmit} ><AddIcon /></button>
            </form>

        </div>
    );
}

export default InputArea;