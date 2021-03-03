import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'firebase/app'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


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
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        cursor: 'pointer', 
    },
    cardDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    divider: {
        margin: 10,
        width: 250,
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
                style={{ cursor: 'pointer', margin: 10 }}
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
                        <Avatar className={classes.avatar} alt={profile.fullName} src={profile.profileImage} />
                        <Typography variant="h5" omponent="h2"  color="textSecondary" >
                            {profile.fullName}
                        </Typography>
                    </div>
                    <CardContent className={classes.cardDiv} >
                        {/* <Typography color="textSecondary" >
                            Word of the Day
                        </Typography> */}
                        <Button onClick={logout} variant="contained" color="primary">
                            Logout
                        </Button>
                        <Divider className={classes.divider} />
                        <Typography color="textSecondary" gutterBottom>
                            Privacy Policy &#183; Terms of Services
                        </Typography>
                    </CardContent>
                </Card>
            </StyledMenu>
        </>
    );
}

export default Account;
