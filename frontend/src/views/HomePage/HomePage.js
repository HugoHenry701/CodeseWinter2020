import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  Paper,
  Padding,
} from '@material-ui/core'


function HomePage(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  function handleChangeUser(event) {
    console.log(event.target.value)
    setUsername(event.target.value)
  }
  function handleChangePassword(event) {
    console.log(event.target.value)
    setPassword(event.target.value)
  }
  function handleSignIn(event) {
    if (password.length < 6) alert('password yeu')
  }
  function handleSignUp(event) {
    alert('clicky')
    console.log(props.params1)
    props.params3()
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') handleSignIn();
  }
  const inputStyle = {
  }
  const buttonStyle = {
    color: '#ffffff',
    backgroundColor: '#4a148c',
    width: 200,
    margin: 5,
    height:10
  }
  const style = {
    backgroundColor: "#00e5ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignIteams: "center",
    flex: 1,
    


  }
  return <Paper  style={style}>
    <TextField label='Tai khoan' type='text' style={inputStyle} onKeyPress={handleKeyPress} onChange={handleChangeUser} />
    <TextField label='Mat khau' type='password' style={inputStyle} onChange={handleChangePassword} />
    <Button onClick={handleSignIn} variant='contained' style={buttonStyle} color='primary'><Typography>Login</Typography></Button>
    <Button onClick={handleSignUp} variant='text' style={buttonStyle} color='primary'><Typography>Sign Up</Typography></Button>
    {/* <Typography>{username}</Typography>
    <Typography>{password}</Typography> */}
  </Paper>
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
export default HomePage;
