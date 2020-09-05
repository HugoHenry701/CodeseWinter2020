import React from 'react';
import {
  Paper,
  Typography,
  Button,

} from '@material-ui/core'
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
import API from './API'
import CategoryForm from './views/NavigatorBar/category'



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listCategory: [],
      total: 0,
    }
  }
  async fetchData() {
    const res = await API.category.parameterCategory()
    console.log(res.data.data)
    if (res.status) {
      this.setState({
        listCategory: res.data.data,
        total: res.data.metadata.length
      })
    } else {
      this.props.enqueueSnackbar(res.message, { varriant: 'error' })
    }
  }
  async componentDidMount() {
    await this.fetchData
  }
  render() {
    return (
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <Paper style={{ padding: 8, display: 'flex', flexDirection: 'column' }}>
            <Link to="/">
              <Button>HomePage</Button>
            </Link>
            <Link to="/SignIn" >
              <Button>SignIn</Button>
            </Link>
            <Typography>Category</Typography>
            <CategoryForm listCategory={this.state.listCategory}></CategoryForm>
          </Paper>

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