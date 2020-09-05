import React from 'react';
import { withSnackbar } from 'notistack'
import HomePage from './views/HomePage';
import SignIn from './views/SignIn'
import NotFound from './views/NotFound'
import shopCart from './views/shopCart'
import {
  Switch,
  BrowserRouter,
  Route,
} from 'react-router-dom'
import ListForm from './views/ListBar'
import NavForm from './views/NavBar'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <NavForm></NavForm>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <ListForm></ListForm>
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