import React, {useState} from "react";
import InputArea from "./InputArea";
import Header from "./Header";
import TodoItem from "./TodoItem";

function App(){
    const [listItems, setListItems] = useState([]);

    function addListItem(newNote) {
        setListItems([...listItems, newNote]);
    }

    function deleteListItem(id) {
        setListItems(prevItems => {
            return (
                listItems.filter((item, index) => {
                    return index !== id;
                })
            );
        });
    }

    return (
        <div>

            <Header />
            <InputArea addItem={addListItem}/>
            {listItems.map((item, index) => {
                return (
                    <TodoItem key={index} note={item} id={index} onDelete={deleteListItem} />
                );
            })}

        </div>
    );
}

export default App;