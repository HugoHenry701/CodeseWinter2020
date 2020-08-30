import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  Paper,
} from '@material-ui/core'


function HomePage(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  function handleChangeUser(event) {
    setUsername(event.target.value)
  }
  function handleChangePassword(event) {
    setPassword(event.target.value)
  }
  function handleSignIn(event) {
    if (password.length < 6) alert('password yeu')
    console.log(username, password)
  }
  function handleSignUp(event) {
    console.log('đây là prop params1: ', props.params1)
    console.log('đây là prop p2: ', props.params2)
    console.log('đây là prop p3: ', props.params3)
    props.setVersion(props.version + 1)
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') handleSignIn();
  }

  const buttonStyle = {
    color: '#ffffff',
    backgroundColor: '#4a148c',
    margin: 10,
    width: 200,
    height: 50
  }
  return <Paper style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    background: "#00e5ff",
  }}>
    <TextField label='Tai khoan' type='text'  onKeyPress={handleKeyPress} onChange={handleChangeUser} />
    <TextField label='Mat khau' type='password'  onChange={handleChangePassword} />
    <Button onClick={handleSignIn} variant='contained' style={buttonStyle} ><Typography>Log In</Typography></Button>
    <Button onClick={handleSignUp} variant='text' style={buttonStyle} ><Typography>Sign Up</Typography></Button>
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
