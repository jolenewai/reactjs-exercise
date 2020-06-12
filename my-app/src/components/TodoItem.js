import React from 'react'
import '../style.css'

function TodoItem(){
    return (
        <div className="Todo">
            <label className="label">Placeholder text here
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default TodoItem