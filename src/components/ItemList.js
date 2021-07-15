import React from 'react'

function ItemList(props) {
    return (
        <div className = "list">
            <ul>
                {props.items.map((item,index)=><li  key = {index} id = {index}>{item} <button onClick = {() =>{
                    props.onDelete(index);
                 }}>DELETE</button></li>)}
            </ul>
        </div>
    )
}

export default ItemList
