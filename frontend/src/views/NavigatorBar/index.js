import React, { Component } from 'react'
import {
    Paper,
    Typography,
    Button,
    ListSubheader,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@material-ui/core'
import {
    ExpandLess,
    ExpandMore,
    Home,
    VpnKey,
    Category,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import CategoryForm from './category'
import API from '../../API'
import {
    Link,
} from 'react-router-dom'


export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listCategory: [],
            total: 0,
            open: false,

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
        await this.fetchData()
    }
    handleClick = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        const classes = makeStyles((theme) => ({
            root: {
                width: '100%',
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
                padding: 8,
                display: 'flex',
                flexDirection: 'column',
            },
        }))
        return (
            <Paper>
                <List
                    component='nav'
                    aria-labelledby='nested-list-subheader'
                    subheader={
                        <ListSubheader component='div' id='nested-list-subheader'>
                            Menu
                        </ListSubheader>
                    }
                    className={classes.root}
                >
                    <ListItem button>
                        <Link to="/">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                        </Link>
                        <ListItemText primary="HomePage" />
                    </ListItem>
                    <ListItem button>
                        <Link to="/SignIn">
                            <ListItemIcon>
                                <VpnKey />
                            </ListItemIcon>
                        </Link>
                        <ListItemText primary="SignIn" />
                    </ListItem>
                    <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <Category />
                        </ListItemIcon>
                        <ListItemText primary="Category" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout='auto' unmountOnExit>
                            <CategoryForm listCategory={this.state.listCategory}></CategoryForm>
                    </Collapse>
                </List>
            </Paper>
        )
    }
}
