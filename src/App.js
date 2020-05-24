import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App ui container">
      <h3>Current standings</h3>
      <table class="ui celled table">
  <thead>
    <tr>
      <th>Number</th>
      <th>Name</th>
      <th>Ranking</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Jamie</td>
      <td>1000</td>
      <td>0</td>
    </tr>
    <tr>
      <td>2</td>
      <td>John</td>
      <td>1000</td>
      <td>0</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Janice</td>
      <td>1000</td>
      <td>0</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Ian</td>
      <td>1000</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
    </div>
    );
  }
}

export default App;

