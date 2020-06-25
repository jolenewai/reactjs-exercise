import React from 'react'
import '../style.css'

function TodoItem(props){
    return (
        <div className="Todo">
            <label className="label">{props.item.text}
                <input type="checkbox" checked={props.item.completed} />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default TodoItem