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
 <li>{people[0].name}</li>
  <li>{3 * 4}</li>
  <li>{true ? 'James'  : 'Hsu'}</li>
   
</ol>
  }
}
  
 

  ReactDOM.render(
    <ContactList />,
    document.getElementById('root')
  )
