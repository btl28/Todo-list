import React, {useState} from "react";
import InputArea from "./InputArea";
import Header from "./Header";
import TodoItem from "./TodoItem";

function App(){
    const [listItems, setListItems] = useState([]);

    function addListItem(newNote) {
        setListItems([...listItems, newNote]);
    }

    return (
        <div>

            <Header />
            <InputArea addItem={addListItem}/>
            {listItems.map((item, index) => {
                return (
                    <TodoItem key={index} note={item} />
                );
            })}

        </div>
    );
}

export default App;