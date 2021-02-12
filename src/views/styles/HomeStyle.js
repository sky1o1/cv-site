import {makeStyles} from '@material-ui/core/';

export const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        resize: {
            fontSize: 50
        },
        margin: {
            margin: theme.spacing(1),
        },
        cardvisit: {
            opacity: 0.5,
        },
        pinkGrad: {
            background: '#ED9BAE',
            background: '-webkit-linear-gradient(to right, #FC698A, #ED9BAE)',
            background: 'linear-gradient(to right, #FC698A, #ED9BAE)',
        },
        greyGrad: {
            background: '#45515D',
            background: '-webkit-linear-gradient(to right, #45515D, #63707A)',
            background: 'linear-gradient(to right, #45515D, #63707A)',
        },
        orangeGrad: {
            background:' #DF6339',
                background:' -webkit-linear-gradient(to right, #DF6339, #EF8F6A)',
                background: 'linear-gradient(to right, #DF6339, #EF8F6A)'
        },
        blueGrad: {
            background: '#373B44',
            background: '-webkit-linear-gradient(to right, #007CC7, #4DA8DA)',
            background: 'linear-gradient(to right, #007CC7, #4DA8DA)',
        },
    }));
