import React, { Component } from 'react'
import InfoIcon from '@material-ui/icons/Info';
import Backdrop from '@material-ui/core/Backdrop';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {
  GridListTileBar,
  GridListTile,
  GridList,
  ListSubheader,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core'
export default class product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  handleClose = () => {
    this.setState(false)
  }
  handleToggle = () => {
    this.setState(!this.useState.open)
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
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    }))
    return (
      <div className={classes.root} >
        <GridList cellHeight={500} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto', }}>
            <ListSubheader component="div">Guitar Shop</ListSubheader>
          </GridListTile>
          {
            this.props.listProduct.map(
              (product) => (
                <GridListTile style={{ padding: 8 }} key={product.productId} >
                  <img style={{ maxHeight: '100%', maxWidth: '100%' }} src={product.imageUrl} alt={product.display} />
                  <GridListTileBar
                    style={{}}
                    title={product.display}
                    subtitle={<span>${product.priceSale}</span>}
                    actionIcon={
                      <div>
                        <IconButton href='/shopCart' color="primary" aria-label="add to shopping cart">
                          <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton onClick={this.handleToggle} className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      </div>
                    }
                  />
                  <Backdrop className={classes.backdrop} open={this.state.open} onClick={this.handleClose}>
                    <Typography>{product.description}</Typography>
                  </Backdrop>
                </GridListTile>
              )
            )
          }
        </GridList>
      </div>)
  }
}
