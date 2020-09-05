import React, { Component } from 'react'
import {
    Paper,
    Typography,
    Button,
  
  } from '@material-ui/core'
export default class category extends Component {
    render() {
        return (
            <div>
                {this.props.listCategory.map(
                    category =>(
                    <Typography>{category.display}</Typography>
                    )
                )}
            </div>
        )
    }
}
