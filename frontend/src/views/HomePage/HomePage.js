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

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listProduct: [{
        display: "minima",
        description: "Ratione expedita omnis dicta praesentium. Deleniti aut eum dolorem sed sed ad ab. Reprehenderit exce",
      },
      {
        display: "voluptatem",
        description: "Facere aut quas rerum sequi voluptas. Aliquam illo et ut eligendi consequatur est. Neque nesciunt su",
      },],
    }
  }
  hamRenderProduct = (product) => {
    return <Card>
      <CardHeader title={product["display"]} />
      <Divider></Divider>
      <CardContent>
        <Typography>{product.description}</Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions>
        <button>Chi tiet</button>
      </CardActions>
    </Card>
  }
  render() {
    return <div>
      {
        this.state.listProduct.map(
          product => this.hamRenderProduct(product)
        )
      }
    </div>
  }
}

export default HomePage;
