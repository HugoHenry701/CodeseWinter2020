import React from 'react';
import {
  Paper,
  Typography,
  Button,
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core'
import {
  ExpandLess,
  ExpandMore,
  Home,
  VpnKey,
  Category,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { withSnackbar } from 'notistack'
import HomePage from './views/HomePage';
import SignIn from './views/SignIn'
import NotFound from './views/NotFound'
import shopCart from './views/shopCart'
import {
  Switch,
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import NavForm from './views/NavigatorBar'



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <NavForm></NavForm>
          <Switch>
            <Route
              component={HomePage}
              exact path="/"
            />
            <Route
              component={shopCart}
              exact path="/shopCart"
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
      </BrowserRouter >)
  }
}



export default withSnackbar(App);