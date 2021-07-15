import React, {useState} from 'react'
import ItemList from './ItemList.js'
function ToDoList() {
    const [itemName, setItemName] = useState("");
    const [items, setItems] = useState([]);
    function handleChange(e){
        const val = e.target.value;
        setItemName(val);
    }
    function addItem(e){
        if(itemName !== "") 
        {
            setItems(prevItem => {
                return [...prevItem, itemName]
            })
            setItemName("");
            e.preventDefault();
        }
        else{
            alert("Enter an Item !!");
            e.preventDefault();
        }
    }
    function deleteItem(id){
        setItems((prevVals) => {
            return prevVals.filter(
                (item,index) => {
                    return index !== id;
                }
            )
        })
    }
    return (
        <div className = "container">
            <header><h2>To-Do List</h2></header>
            <div >
                <form>
                    <input type = "text" onChange  = {handleChange} value = {itemName} placeholder = "Add Item" required />
                    <button onClick = {addItem}><span>ADD</span></button>
                </form>
                <ItemList onDelete = {deleteItem} items = {items} />
            </div>
        </div>
    )
}

export default ToDoList
