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
            background: 'linear-gradient(to right top, #BB377D, #f15f79)',
            background: '-webkit-linear-gradient(to right top, #BB377D, #f15f79)',
            background: 'linear-gradient(to right top, #BB377D, #f15f79)',
        },
        greyGrad: {
            background: '#45515D',
            background: '-webkit-linear-gradient(to right, #45515D, #63707A)',
            background: 'linear-gradient(to right, #45515D, #63707A)',
        },
        orangeGrad: {
            background: 'linear-gradient(to right top,#ff4b1f,#ff9068 )',
            background:' -webkit-linear-gradient(to right top,#ff4b1f,#ff9068 )',
            background: 'linear-gradient(to right top,#ff4b1f,#ff9068) '
        },
        blueGrad: {
            background: 'linear-gradient(to right top, #032481, #053090, #073da0, #0749af, #0556bf)',
            background: 'linear-gradient(to right top, #3a7bd5, #00d2ff)',
            background: 'linear-gradient(to right top, #005AA7, #5691c8)',
            background: '-webkit-linear-gradient(to right top, #032481, #053090, #073da0, #0749af, #0556bf)',
            background: '-webkit-linear-gradient(to right top, #3a7bd5, #00d2ff)',
            background: '-webkit-linear-gradient(to right top,  #005AA7, #5691c8)',
            background: 'linear-gradient(to right top, #032481, #053090, #073da0, #0749af, #0556bf)',
            background: 'linear-gradient(to right top, #3a7bd5, #00d2ff)',
            background: 'linear-gradient(to right top,  #005AA7, #5691c8)',
        },
        greenGrad: {
            background: 'linear-gradient(to right top,#56ab2f, #a8e063)',
            background: 'linear-gradient(to right top, #02aab0, #00cdac)',
            background: '-webkit-linear-gradient(to right top,#56ab2f, #a8e063)',
            background: '-webkit-linear-gradient(to right top, #02aab0, #00cdac',
            background: 'linear-gradient(to right top,#56ab2f, #a8e063)',
            background: 'linear-gradient(to right top, #02aab0, #00cdac)',
        },
        violetGrad: {
            background: 'linear-gradient(to right top, #0f0c29, #302b63)',
            background:' -webkit-linear-gradient(to right top, #0f0c29, #302b63)',
            background: 'linear-gradient(to right top, #0f0c29, #302b63)'
        },
        blackGrad: {
            background: 'linear-gradient(to right top,#000, #434343)',
            background: '-webkit-linear-gradient(to right top,#000, #434343)',
            background: 'linear-gradient(to right top,#000, #434343)',
        }
    }));
