import React from 'react';
import {
    makeStyles,
    TextField,
    Card,
    CardActions,
    CardContent,
    CardActionArea,
    CardMedia,
    Button,
    Grid,
    Typography,
    InputAdornment,
    Slider,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: 'auto',
        height: 200,
        marginLeft: 400,
    },
});


function Index() {
const classes = useStyles()
    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Welcome
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Welcome to the EV-TAE
            </Typography>
          </CardContent>
      </Card>
    )
}

export default Index;