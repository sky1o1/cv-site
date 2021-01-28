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
        greyGrad: {
            background: '#bdc3c7',
            background: '-webkit-linear-gradient(to left, #2c3e50, #bdc3c7)',
            background: 'linear-gradient(to left, #2c3e50, #bdc3c7)',
        },
        blackGrad: {
            background: '#000000',
            background: '-webkit-linear-gradient(to left, #434343, #000000)',
            background: 'linear-gradient(to left, #434343, #000000)',
        },
        whiteGrad: {
            background:' #8e9eab',
            background:' -webkit-linear-gradient(to left, #eef2f3, #8e9eab)',
            background: 'linear-gradient(to left, #eef2f3, #8e9eab)',
        },
        blueGrad: {
            background: '#373B44',
            background: '-webkit-linear-gradient(to left, #4286f4, #373B44)',
            background: 'linear-gradient(to left, #4286f4, #373B44)',
        },
        
    }));
