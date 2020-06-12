import React from 'react'
import Joke from './Joke'
import './style.css'

function App(){

    return (
        <div className="jokes">
            <Joke 
                joke={{
                    question:"What’s the best thing about Switzerland?", 
                    answer:"I don’t know, but the flag is a big plus."
                }}
            />
            <Joke 
                joke={{
                    question:"Did you hear about the mathematician who’s afraid of negative numbers?", 
                    answer:"He’ll stop at nothing to avoid them."
                }}
            />
            <Joke 
                joke={{
                    question:"Why do we tell actors to 'break a leg?'", 
                    answer:"Because every play has a cast."
                }}
            />
            <Joke 
                joke={{
                    question:"Helvetica and Times New Roman walk into a bar", 
                    answer:"“Get out of here!” shouts the bartender. “We don’t serve your type.”"
                }}
            />
            <Joke 
                joke={{
                    answer:`Once my dog ate all the Scrabble tiles.

                    He kept leaving little messages around the house.`
                }}
            />
        </div>

    )


}



export default App