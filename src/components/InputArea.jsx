import React, {useState} from "react";

function InputArea(props){
    const [note, setNote] = useState({note: "", isDone: false});

    function handleChange(event) {
        const value = event.target.value;
        setNote({note: value, isDone: false});
    }

    function handleSubmit(event) {
        props.addItem(note);
        setNote({ note: "", isDone: false});
        event.preventDefault();
    }

    return (
        <div>

            <form className="create-note">

                <div className="item-input">
                    <input onChange={handleChange} value={note.note} placeholder="Add an item" />
                </div>
                <div className="submit-btn">
                    <button onClick={handleSubmit} name="submit-btn" ><i className="fa-solid fa-angle-right"></i></button>
                </div>
                
            </form>

        </div>
    );
}

export default InputArea;