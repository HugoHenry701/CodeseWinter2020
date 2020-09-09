import React from 'react';
import { withSnackbar } from 'notistack'
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Avatar,
  Link,
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors'


import API from '../../API'
class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listProduct: [],
      total: 0,
      page: 1,
      size: 8,
      expanded: false,
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
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
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
    return (
      <div style={{ paddingTop: 65,  }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" style={{backgroundColor:'#fafafa'}} onClick={this.prevPage}>Prev</Button>
          <Typography>{this.state.page}-{Math.ceil(this.state.total / this.state.size)}</Typography>
          <Button variant="contained" style={{backgroundColor:'#fafafa'}} onClick={this.nextPage}>Next</Button>
        </div>
        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {
            this.state.listProduct.map(
              (product) => (
                <Card style={
                  {
                    maxWidth: 345,
                  }
                }>
                  <CardHeader
                    avatar={
                      <Avatar aria-label='guitar' style={{
                        backgroundColor: red[500],
                      }}>
                        G
                    </Avatar>
                    }
                    action={
                      <IconButton aria-label='settings' >
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={product.display}
                    subheader={product.priceSale}
                  />
                  <CardMedia
                    style={{
                      height: 0,
                      paddingTop: '100%'
                    }}
                    image={product.imageUrl}
                    title={product.display}
                  />
                  <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p' >
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label='add to favorites'>
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label='share'>
                      <ShareIcon />
                    </IconButton>
                    <IconButton>
                      <Link href='/shopCart'>
                        <AddShoppingCartIcon />
                      </Link>
                    </IconButton>
                    <IconButton
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label='show more'
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Provider:{product.provider}</Typography>
                      <Typography paragraph>Status:{product.status}</Typography>
                      <Typography paragraph>Ship day:{product.shipday}</Typography>
                      <Typography paragraph>Available at:{product.created_at}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>

              )
            )
          }
        </div>
      </div>)
  }
}

export default withSnackbar(HomePage);

