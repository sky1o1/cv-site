import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import firebase from 'firebase/app'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


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

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }))

function Account({ setActivePage }) {
const classes = useStyles();
const profile = useSelector(state => state.profile)
    const [handleAccountOpen, setHandleAccountOpen] = useState(null)

    const handleClickAccount = (event) => {
        setHandleAccountOpen(event.currentTarget);
    };

    const handleCloseAccount = () => {
        setHandleAccountOpen(null);
    };

    const logout = () => {
        firebase.auth().signOut().then(function () {
            console.log('logged out')
            setActivePage('login')

        }).catch(function (error) {
            console.log('error logging out')
        });
        console.log('logged out')
    }

    return (
        <>
            <Tooltip title="Account" placement="bottom">
                 <Avatar 
                 style={{cursor: 'pointer', margin: 10}}
                  onClick={handleClickAccount} 
                  alt={profile.fullName} 
                  src={profile.profileImage} 
                  />
            </Tooltip>

            <StyledMenu
                id="customized-menu"
                anchorEl={handleAccountOpen}
                keepMounted
                open={Boolean(handleAccountOpen)}
                onClose={handleCloseAccount}
            >
                <Card >
                <div className={classes.root}>
                    <Avatar alt={profile.fullName} src={profile.profileImage} />
                </div>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <button onClick={logout}>
                                Logout
                            </button>
                            <Typography color="textSecondary" gutterBottom>
                          Privacy Policy Terms of Services
                        </Typography>
                    </CardContent>
                </Card>
            </StyledMenu>
        </>
    );
}

export default Account;
