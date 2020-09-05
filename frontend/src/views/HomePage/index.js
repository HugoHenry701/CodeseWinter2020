import React from 'react';
import { withSnackbar } from 'notistack'
import InfoIcon from '@material-ui/icons/Info';
import {
  Typography,
  Button,

} from '@material-ui/core'
import API from '../../API'
import ProductForm from './product'
class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listProduct: [],
      total: 0,
      page: 1,
      size: 8,
    }
  }
  async fetchData() {
    const res = await API.product.getAllProduct({
      page: this.state.page,
      size: this.state.size
    })

    console.log(res.data.data)
    if (res.status) {
      this.setState({
        listProduct: res.data.data,
        total: res.data.metadata.total
      })
    } else {
      this.props.enqueueSnackbar(res.message, { variant: 'error' })
    }
  }
  async componentDidMount() {
    await this.fetchData()
  }
  prevPage = async () => {
    if (this.state.page > 1) {
      await this.setState({
        page: this.state.page - 1
      })
      await this.fetchData()
    } else {
      alert('First page already')
    }

  }
  nextPage = async () => {
    if (this.state.page < Math.ceil(this.state.total / this.state.size)) {
      await this.setState({
        page: this.state.page + 1
      })
      await this.fetchData()
    } else {
      alert('Page run out')
    }
  }
  render() {
    return <div style={{ padding: 8 }}>
      {/* <Typography>Total:{this.state.total}</Typography>
      <Typography>Page:{this.state.page}</Typography>
      <Typography>Size:{this.state.size}</Typography>
      <Typography>offset:{this.state.offset}</Typography> */}
      <div style={{ padding:32 ,display: "flex", justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={this.prevPage}>Prev</Button>
        <Typography>{this.state.page}-{Math.ceil(this.state.total / this.state.size)}</Typography>
        <Button variant="contained" color="primary" onClick={this.nextPage}>Next</Button>
      </div>
      <ProductForm listProduct={this.state.listProduct} ></ProductForm>
    </div>
  }
}

export default withSnackbar(HomePage);
