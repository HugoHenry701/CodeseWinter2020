import React from 'react';
import {
  TextField,
  Typography,
  Button,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider
} from '@material-ui/core'
import axios from 'axios'


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allProduct: [],
      currentProduct: [],
      total: 0,
      getPage: 1,
      page: 1,
      all: 100,
      size: 8,
      offset: 8,

    }
  }
  async componentDidMount() {
    try {
      const linkApi = 'http://localhost:8000/api/v1/product'
      const res = await axios.get(linkApi, {
        params: {
          page: this.state.getPage,
          size: this.state.all
        }
      })

      console.log(res.data.data)
      this.setState({
        allProduct: res.data.data,
        currentProduct: res.data.data,
        total: res.data.metadata.total
      })
    } catch (err) {
      console.log(err)
    }
  }
  hamRenderProduct = (product) => {
    return <Card>
      <CardHeader title={product["display"]} style={{ backgroundColor: "#fff176" }} />
      <Divider></Divider>
      <CardContent>
        <Typography>{product.description}</Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions>
        <Button>Chi tiet</Button>
      </CardActions>
    </Card>
  }
  onPageChanged = () => {
    const currentProduct = this.state.allProduct.slice(this.state.offset, this.state.offset + this.state.size)
    this.setState({
      currentProduct
    })
  }
  prevPage = async () => {
    if (this.state.page > 1) {
      await this.setState({
        ...this.state,
        page: this.state.page - 1,
        offset: (this.state.page - 2) * this.state.size
      })
      this.onPageChanged()

    } else {
      alert('First page already')
    }

  }
  nextPage = async () => {
    if (this.state.page < Math.ceil(this.state.total / this.state.size)) {
      await this.setState({
        ...this.state,
        page: this.state.page + 1,
        offset: (this.state.page) * this.state.size
      })
      this.onPageChanged()
    } else {
      alert('Page run out')
    }
  }
  render() {
    return <div>
      <Typography>Total:{this.state.total}</Typography>
      <Typography>Page:{this.state.page}</Typography>
      <Typography>Size:{this.state.size}</Typography>
      <Typography>offset:{this.state.offset}</Typography>
      <Typography>Paging:{this.state.page}-{Math.ceil(this.state.total / this.state.size)}</Typography>
      <Button onClick={this.prevPage}>Prev</Button>
      <Button onClick={this.nextPage}>Next</Button>
      {
        this.state.currentProduct.map(
          product => this.hamRenderProduct(product)
        )
      }
    </div>
  }
}

export default HomePage;
