// import React, { useEffect, useState } from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import Popover from '@material-ui/core/Popover';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Badge from '@material-ui/core/Badge';
// import Button from '@material-ui/core/Button';


// const drawerWidth = 240;



// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexGrow: 1,

//   },
//   toolbarButtons: {
//     marginLeft: 'auto',
//   },
//   notificationsButtons: {
//     marginLeft: 'auto',
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   },
//   title: {
//     flexGrow: 1,
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-start',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: 0,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// }));

// function AppBarMenu(){
//     const classes = useStyles()
//     const [open, setOpen] = useState(false);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [notifications, setNotifications] = useState(4)

//     const handleDrawerOpen = () => {
//         setOpen(true);
//       };

//       const handleDrawerClose = () => {
//         setOpen(false);
//       };

//       const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//       };

//       const handleClose = () => {
//         setAnchorEl(null);
//       };

//       const opening = Boolean(anchorEl);
//       const id = opening ? 'simple-popover' : undefined;


//     return(
//         <MuiThemeProvider theme={theme}>
//         <div className={classes.root}>
//           <CssBaseline />
//           <AppBar
//             position="fixed"
//             className={clsx(classes.appBar, {
//               [classes.appBarShift]: opening,
//             })}
//           >


//             <Toolbar>
//                 <div  className={classes.toolbarButtons}>
//               <Badge badgeContent={notifications} showZero color="primary" >
//                 <NotificationsIcon onClick={handleClick} />
//               </Badge>

//               <Popover
//                 id={id}
//                 open={opening}
//                 // anchorEl={anchorEl}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'center',
//                 }}
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'center',
//                 }}
//               >
//                 <div>
//                   <Card className={classes.root}>
//                     <CardContent>

//                     </CardContent>
//                   </Card>
//                 </div>
//               </Popover>

//               <IconButton
//                 color="inherit"
//                 edge="end"
//                 onClick={handleDrawerOpen}
//                 className={clsx(open && classes.hide)}
//               >
//                 <MenuIcon />
//               </IconButton>

//               </div>
//             </Toolbar>
//           </AppBar>
//           <Drawer
//             className={classes.drawer}
//             variant="persistent"
//             anchor="right"
//             open={open}
//             classes={{
//               paper: classes.drawerPaper,
//               marginLeft: 20
//             }}
//           >
//             <div className={classes.drawerHeader}>
//               <IconButton onClick={handleDrawerClose}>
//                 {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//               </IconButton>
//             </div>
//             <Divider />
//             <List>
//               {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                 <ListItem button key={text}>
//                   <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               ))}
//             </List>
//             <Divider />
//           </Drawer>
//         </div>
//       </MuiThemeProvider>
//     )
// }

// export default AppBarMenu;


import React, { useState } from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Tooltip from '@material-ui/core/Tooltip';

import Mail from './Mail';
import ThemeColors from './ThemeColors';
import Notifications from './Notifications'
import Account from './Account';
import DrawerMenu from './Drawer';

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            root: {
                backgroundColor: 'transparent !important',
                boxShadow: 'none',
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    iconbtn: {
        color: '#000'
    }
}));

// custom menu
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);
//custom menu end

export default function PrimaryAppBar({ setActivePage }) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const [customMenu, setCustomMenu] = useState(null);

    const [open, setOpen] = useState(false);

    // for customized menu
    const handleClickMenu = (event) => {
        setCustomMenu(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setCustomMenu(null);
    };

    //menu mobile
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem >
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>

        </Menu>
    );

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>

                            {/* mail icon */}
                            <Mail />
                            {/* end of mail icon */}

                            <ThemeColors />
                            {/* custmonized menu */}
                            <Tooltip title="Custom Menu" placement="bottom">
                                <IconButton style={{ position: 'relative' }} ref={customMenu}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClickMenu}>
                                    <Badge badgeContent={4} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>

                            <StyledMenu
                                id="customized-menu"
                                anchorEl={customMenu}
                                keepMounted
                                open={Boolean(customMenu)}
                                onClose={handleCloseMenu}
                            >
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <SendIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Sent mail" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <DraftsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <InboxIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                </StyledMenuItem>
                            </StyledMenu>
                            {/* end customized menu */}




                            {/* notification */}
                            <Notifications />
                            {/* end of notification */}




                            {/* account circle */}
                            <Account activePage={setActivePage} />
                            {/* end of account circle */}

                            <DrawerMenu />


                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
        </MuiThemeProvider>
    );
}
