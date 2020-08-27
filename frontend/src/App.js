import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function app(props) {
  const { username, setUsername } = useState
  const { age, setAge } = useState
  const { password, setPassword } = useState
  const { birthday, setBirthDay } = useState
  function handleChangeAge(event) {
    console.log(event.target.value)
    setAge(event.target.value)
  }
  function handleChangeUser(event) {
    console.log(event.target.value)
    setUsername(event.target.value)
  }
  function handleChangePassword(event) {
    console.log(event.target.value)
    setPassword(event.target.value)
  }
  function handleChangeBirthday(event) {
    console.log(event.target.value)
    setBirthDay(event.target.value)
  }
  function handleclick(event) {
    alert('clicky')
  }
  return <div>
    <input type='number' onChange={handleChangeAge}></input>
    <input type='date' onChange={handleChangeBirthday} />
    <input type='text' onChange={handleChangeUser} />
    <input type='password' onChange={handleChangePassword} />
    <input type='' />
    <input type='' />
    <button onClick={handleclick}><h1>nut bam</h1></button>
    <br></br>
    <h3>{age}</h3>
    <br></br>
    <h3>{birthday}</h3>
    <br></br>
    <h3>{username}</h3>
    <br></br>
    <h3>{password}</h3>


  </div>
}

class MyComponent extends React.Component {
  constructor(props) {
    this.state = {
      username: "hieu",
      age: 20,
      password: "12345"
    }

  }
  componentWillMount() {

  }
  componentWillReceiveProps() {

  }
  componentWillUpdate() {

  }
  render() {
    return
  }
}
export default App;
