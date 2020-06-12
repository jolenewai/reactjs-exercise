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
            <div className="question" style={{display: props.question ? "block" : "none"}}>
                {props.question}
            </div>
            <div className="answer" style={{color: !props.question && "red" }}>
                {props.answer}            
            </div>  
        </div>
    )
}

export default Joke