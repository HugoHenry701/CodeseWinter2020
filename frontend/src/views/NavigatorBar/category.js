import React, { Component } from 'react'
import {
    Paper,
    Typography,
    Button,
    ListItemText,
    ListItem,
    List

} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
export default class category extends Component {
    render() {
        const classes = makeStyles((theme) => ({
            nested: {
                paddingLeft: theme.spacing(8)
            }
        }))
        return (
            <div>
                {this.props.listCategory.map(
                    category => (
                        <List component='div' disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText>{category.display}</ListItemText>
                            </ListItem>
                        </List>

                    )
                )}
            </div>
        )
    }
}
