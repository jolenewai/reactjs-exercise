import React from 'react'
import ContactCard from './ContactCard'

function App(){
    return (
        <div className="contacts">
        <ContactCard 
            contact={{name: "William Wei", imgURL: require('./images/nature1.jpg'), phone:"+65 93829482", email:"william@weibird.com"}}
        />
        <ContactCard 
            contact={{name: "Waa Wei", imgURL: require('./images/nature2.jpg'), phone:"+65 85684532", email:"waa@weibird.com"}}
        />
        </div>
    )
}

export default App