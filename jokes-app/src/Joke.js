import React from 'react'

function Joke(props){

    // let styles = { display: "block"}

    // if (props.joke.question) {
    //     styles.display = "block"
    // } else {
    //     styles.display = "none"
    // }

    return (
        <div className="JokesContainer">
            <div className="question" style={{display: props.joke.question ? "block" : "none"}}>
                {props.joke.question}
            </div>
            <div className="answer" style={{color: !props.joke.question && "red" }}>
                {props.joke.answer}            
            </div>  
        </div>
    )
}

export default Joke