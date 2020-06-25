import React, {Component} from 'react'


class App extends Component {

  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render(){
    let wordDisplay

    if (this.state.isLoggedIn === true) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }
    return (
      <div>
        <h1>You are currently logged {wordDisplay}</h1>
      </div>
    )
  }
}

// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       name: "Jolene",
//       age: 38
//     }
//   }

//   render(){
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old</h3>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       answer: "Yes"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//         <ChildComponent answer={this.state.answer}/>
//       </div>
//     )
//   }
// }

// class Header extends React.Component{
//   render(){
//     return (
//     <header>
//       <p>Welcome, {this.props.username}!</p>
//     </header>
//   )
// }
// }

// class Greetings extends React.Component{
//   render(){
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay

//     if (hours < 12) {
//       timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon"
//     } else {
//       timeOfDay = "night"
//     }
//     return(
//       <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
//   }

// }

export default App;
