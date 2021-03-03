import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import useTheme from '../hooks/useTheme';
import {Grid} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import ColorLensIcon from '@material-ui/icons/ColorLens';


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
    },
    themeGrid: {
        display: 'flex',
        flexDirection: 'column',
    },
    themeGridList: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    divColor: {
        height: 60,
        width: 90,
        borderRadius: '20px',
        cursor: 'pointer',
    }
}));


function ThemeColors() {

    const classes = useStyles();
    const [bgColor1, textColor1, headColor, textColor2, gradColor, updateColor] = useTheme('greyColor')
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Grid className={classes.themeGrid}>
                <Grid item className={classes.themeGridList}>
                    <button className={classes.divColor} style={{backgroundColor:'#45515D'}} onClick={() => updateColor('greyColor') }/>
                    <button className={classes.divColor} style={{backgroundColor:'#000'}} onClick={() => updateColor('blackColor') }/>
                </Grid>

                <Grid item className={classes.themeGridList}>
                    <button className={classes.divColor} style={{backgroundColor:'#ff4b1f'}}  onClick={() => updateColor('orangeColor') }/>
                    <button className={classes.divColor} style={{backgroundColor:'#BB377D'}}  onClick={() => updateColor('pinkColor') }/>
                </Grid>

                <Grid item className={classes.themeGridList}>
                    <button className={classes.divColor} style={{backgroundColor:'#032481'}} onClick={() => updateColor('blueColor') }/>
                    <button className={classes.divColor} style={{backgroundColor:'#56ab2f'}} onClick={() => updateColor('greenColor') }/>
                </Grid>

                <Grid item className={classes.themeGridList}>
                    <button className={classes.divColor} style={{backgroundColor:'#302b63'}}  onClick={() => updateColor('violetColor') }/>
                </Grid>
            </Grid>
        </div>
    );

    return (
        <>
            <Tooltip title="Open drawer" placement="bottom">
                <IconButton
                    edge="end"
                    aria-label="open drawer"
                >
                    <div>
                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <ColorLensIcon onClick={toggleDrawer(anchor, true)} />
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                </IconButton>
            </Tooltip>
        </>
    );
}

export default ThemeColors;