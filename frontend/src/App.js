import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  TextField,
  Typography,
  Button,
} from '@material-ui/core'


function App(props) {
  const [ username, setUsername ] = useState()
  const [ age, setAge ] = useState()
  const [ password, setPassword ] = useState()
  const [ birthday, setBirthDay ] = useState()
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
  const buttonStyle = {
    color:'#ffffff',
    backgroundColor:'#4a148c'
  }
  return <div>
    <TextField type='number' onChange={handleChangeAge}/>
    <TextField type='date' onChange={handleChangeBirthday} />
    <TextField type='text' onChange={handleChangeUser} />
    <TextField type='password' onChange={handleChangePassword} />
    {/* <TextField type='' />
    <TextField type='' /> */}
    <br></br>
    <Button onClick={handleclick} variant='contained' style={buttonStyle} color='primary'><Typography>nut bam 1</Typography></Button>
    <Button onClick={handleclick} variant='text' color='secondary'><Typography>nut bam 2</Typography></Button>
    <Button onClick={handleclick} variant='outlined' color='inherit '><Typography>nut bam 3</Typography></Button>
    <br></br>
    <Typography>{age}</Typography>
    <br></br>
    <Typography>{birthday}</Typography>
    <br></br>
    <Typography>{username}</Typography>
    <br></br>
    <Typography>{password}</Typography>


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
