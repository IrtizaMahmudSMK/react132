import React, { Component } from "react";

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

         <ContactList
          contacts= {[
            { name: "Jayeed Ibn Harisa(Ra:)" },
            { name: "Jafor Ibn Abu Talib(Ra:)" },
            { name: "Abdullah Ibn Rawaha(Ra:)" }
          ]}
        />
        <ContactList  contacts = { [
           { name: "Saad Ibne Muaaj(Ra:)" },
           { name: "Abu Ubaidah Ibn Zarrah(Ra:)" },
           { name: "Abdur Rahman Ibn Aauf" }
        ]}/> 
      </div>
    );
  }
}

export default App;
