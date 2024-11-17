import React from 'react'
import ReactDOM from 'react-dom'


class ContactList extends React.Component{
  render(){


const people = [
  {name : 'Tyler'},
  {name : 'Karean'},
  {name : 'Richard'}
]

return<ol>
  {people.map((person)=> (
    <li>{person.name}</li>
  ))}   
</ol>
  }
}
  
 

  ReactDOM.render(
    <ContactList />,
    document.getElementById('root')
  )
