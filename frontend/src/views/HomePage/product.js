import React, { Component } from 'react'
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {
  GridListTileBar,
  GridListTile,
  GridList,
  ListSubheader,
  IconButton,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core'
export default class product extends Component {
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
      noMaxWidth: {
        maxWidth: 'none',
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
                  <img style={{display:'block',maxWidth:"100%",maxHeight:"100%"}} src={product.imageUrl} alt={product.display} />
                  <GridListTileBar
                    title={product.display}
                    subtitle={<span>${product.priceSale}</span>}
                    actionIcon={
                      <div>
                        <IconButton href='/shopCart' color="primary" aria-label="add to shopping cart">
                          <AddShoppingCartIcon />
                        </IconButton>
                        <Tooltip title={product.description} className={classes.noMaxWidth}>
                          <IconButton className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                    }
                  />
                </GridListTile>
              )
            )
          }
        </GridList>
      </div>
    )
  }
}
