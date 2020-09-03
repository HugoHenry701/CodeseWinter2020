import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Button,

} from '@material-ui/core'
import HomePage from './views/HomePage';
import SignIn from './views/SignIn'
import NotFound from './views/NotFound'
import {
  Switch,
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

function App(props) {
  return <BrowserRouter>
    <div style={{display:'flex',flexDirection:'row',height:'100%'}}>
      <Paper style={{padding:8 ,display:'flex',flexDirection:'column'}}>
        <Link to="/">
          <Button>HomePage</Button>
        </Link>
        <Link to="/SignIn" >
          <Button>SignIn</Button>
        </Link>
      </Paper>
      <Switch>
        <Route
          component={HomePage}
          exact path="/"
        />
        <Route
          component={SignIn}
          exact path="/SignIn"
        />
        <Route
          component={NotFound}
          path="/"
        />
      </Switch>
    </div>
  </BrowserRouter >
}



export default App;