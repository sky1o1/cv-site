import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';


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


function Account() {

    const [handleAccountOpen, setHandleAccountOpen] = useState(null)
    const handleClickAccount = (event) => {
        setHandleAccountOpen(event.currentTarget);
    };

    const handleCloseAccount = () => {
        setHandleAccountOpen(null);
    };
    return (
        <>
            <Tooltip title="Account" placement="bottom">
                <IconButton
                    edge="end"
                    onClick={handleClickAccount}
                    aria-label="account of current user"
                    aria-haspopup="true"

                >
                    <AccountCircle />
                </IconButton>
            </Tooltip>

            <StyledMenu
                id="customized-menu"
                anchorEl={handleAccountOpen}
                keepMounted
                open={Boolean(handleAccountOpen)}
                onClose={handleCloseAccount}
            >
                <Card >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                                        </Typography>
                    </CardContent>
                </Card>
            </StyledMenu>
        </>
    );
}

export default Account;
