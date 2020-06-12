import React from 'react'
import Joke from './Joke'
import './style.css'
import jokesData from './jokesData'

function App(){

    const jokeComponents = jokesData.map( joke => <Joke question = {joke.question} answer= {joke.answer} />)

    return (
        <div className="jokes">
           {jokeComponents}
        </div>

    )


}



export default App