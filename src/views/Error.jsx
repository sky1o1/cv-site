import React from 'react';
import {
    makeStyles,
    Card,
    CardContent,
    Typography,
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


function Error() {
const classes = useStyles()
    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Welcome to the EV-TAE
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Page not found
            </Typography>
          </CardContent>
      </Card>
    )
}

export default Error;