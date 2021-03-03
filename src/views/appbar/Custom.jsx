import React, { useState } from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AdbIcon from '@material-ui/icons/Adb';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Tooltip from '@material-ui/core/Tooltip';

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

function Custom() {
    const [customMenu, setCustomMenu] = useState(null);
    const [open, setOpen] = useState(false);
    
    const handleClickMenu = (event) => {
        setCustomMenu(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setCustomMenu(null);
    };

    return (
        <>
            <Tooltip title="Custom Menu" placement="bottom">
                <IconButton style={{ position: 'relative' }} ref={customMenu}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleClickMenu}>
                    <Badge badgeContent={4} color="secondary">
                        <AdbIcon />
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
        </>
    );
}

export default Custom;