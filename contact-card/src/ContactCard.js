import React from 'react'

function ContactCard(props){
    console.log(props)
    return (
        <div className="CardContainer">
            <img src={props.contact.imgURL} width="200" alt="img" />
            <div className="CardContent">
                <h3>{props.contact.name}</h3>
                Phone: {props.contact.phone}<br/>
                Email: {props.contact.email}
            </div>
        </div>
    )
}

export default ContactCard