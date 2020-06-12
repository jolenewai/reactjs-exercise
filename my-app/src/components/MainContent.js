import React from 'react'

function Main() {
    const date = new Date()
    const hours = date.getHours()
    const styles = {
        fontSize: 45
    }

    let timeOfDay

    if (hours < 12) {
        timeOfDay = 'morning'
        styles.color = 'yellow'
    } else if (hours >= 12 && hours < 18 ) {
        timeOfDay = 'afternoon'
        styles.color = 'orange'
    } else {
        timeOfDay = 'night'
        styles.color = 'red'
    }

    return (
        <main>
            <h2 style={styles}>Good {timeOfDay}</h2>   
        </main>
    )
}

export default Main