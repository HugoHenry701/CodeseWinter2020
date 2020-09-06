import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListForm from '../ListBar'
import { Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileOpen: false,
            drawerWidth: 240,
        }
    }
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen })
    }
    container = () => {
        if (this.props.window !== undefined) {
            this.props.window().document.body = undefined;
        }
    }
    theme = () => useTheme();

    render() {
        const classes = makeStyles((theme) => ({
            root: {
                display: 'flex',
            },
            drawer: {
                [theme.breakpoints.up('sm')]: {
                    width: this.state.drawerWidth,
                    flexShrink: 0,
                },
            },
            appBar: {
                [theme.breakpoints.up('sm')]: {
                    width: `calc(100% - ${this.state.drawerWidth}px)`,
                    marginLeft: this.state.drawerWidth,
                },
            },
            menuButton: {
                marginRight: theme.spacing(2),
                [theme.breakpoints.up('sm')]: {
                    display: 'none',
                },
            },
            toolbar: theme.mixins.toolbar,
            drawerPaper: {
                width: this.state.drawerWidth,
            },
        }));
        return (
            <div className={classes.root} >
                <CssBaseline />
                <AppBar  position="fixed" className={classes.appBar}>
                    <Toolbar style={{display:"flex",justifyContent:'space-between'}} >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            VipPro
                        </Typography>
                        <Button color="inherit">Subcribe</Button>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-lable="List Field">
                    <Hidden smUp implementation="css" >
                        <Drawer
                            container={this.container}
                            variant="temporary"
                            anchor={this.theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            <ListForm></ListForm>
                        </Drawer>
                    </Hidden>

                </nav>
            </div>
        )
    }
}
NavBar.propTypes = {
    window: PropTypes.func,
};
