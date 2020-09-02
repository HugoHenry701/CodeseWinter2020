import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import {
  TextField,
  Typography,
  Button,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  GridListTileBar,
  GridListTile,
  GridList,
  ListSubheader,
  IconButton,
  makeStyles,
  Icon,
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
      offset: 0,

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
        currentProduct: res.data.data.slice(0, 8),
        total: res.data.metadata.total
      })
    } catch (err) {
      console.log(err)
    }
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
        page: this.state.page + 1 ,
        offset: (this.state.page) * this.state.size
      })
      this.onPageChanged()
    } else {
      alert('Page run out')
    }
  }
  render() {
    const classes = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 500,
        height: 450,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
    }))
    return <div>
      <Typography>Total:{this.state.total}</Typography>
      <Typography>Page:{this.state.page}</Typography>
      <Typography>Size:{this.state.size}</Typography>
      <Typography>offset:{this.state.offset}</Typography>
      <Typography>Paging:{this.state.page}-{Math.ceil(this.state.total / this.state.size)}</Typography>
      <Button onClick={this.prevPage}>Prev</Button>
      <Button onClick={this.nextPage}>Next</Button>
      <div className={classes.root} >
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto', }}>
            <ListSubheader component="div">Guitar Shop</ListSubheader>
          </GridListTile>
          {
            this.state.currentProduct.map(
              (product) => (
                <GridListTile style={{position: 'relative' }} key={product.productId} >
                  <img style={{ maxWidth: 100, maxHeight: 100 }} src={product.imageUrl} alt={product.display} />
                  <GridListTileBar
                    style={{ position: 'absolute' }}
                    title={product.display}
                    subtitle={<span>${product.priceSale}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${product.display}`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              )
            )
          }
        </GridList>
      </div>

    </div>
  }
}

export default HomePage;
