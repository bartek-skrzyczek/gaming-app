import React, {useState} from 'react';
import './App.css';
import User from './components/User';
import FormDataComponent from './components/Form-data';

//console.log(storedValue);

const TrUser = props => {
  const user = props.user;
  console.log(props);
  return (
    <tr>
      <td>{props.index}</td>
      <User username={user.username} rank={user.rank} points={user.points} />
    </tr>
  )
}

const App = props => {

  const [users, setUsers] = useState([

  ]);

  const addUser = user => {
    console.log("App.printUser", user)
    setUsers(state => {
      return [...state,user]
    })
  }

  
  //handleFormSubmit = () => {};
  //window.localStorage.setItem('users', 'Tom');
  //if (localStorage.getItem('users')) { users = JSON.parse(window.localStorage.getItem('users')) }

  return (
    <div className="App ui container">
      <FormDataComponent onUserAdd={addUser}/>

      <h3>Current standings</h3>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Ranking</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => <TrUser key={index} index={index} user={user} />)}
        </tbody>
      </table>
    </div>
  );
}

export default App;

