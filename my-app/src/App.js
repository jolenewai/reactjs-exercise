import React from 'react'
import TodoItem from './components/TodoItem'
import TodosData from './components/TodosData'

function App() {

    const todosItems = TodosData.map(item => <TodoItem item={item}/>)

    return (
        <div className="todo-list">
            {todosItems}
        </div>
    )
}

export default App