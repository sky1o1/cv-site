import {makeStyles} from '@material-ui/core/';

export const useStyles = makeStyles((theme) => ({
    btnDiv: {
        display:'flex',
        justifyContent: 'center',
    },
    btn: {
        borderRadius: '50%',
        height: '18px',
        width: '18px',
        border: '2px solid white',
        marginRight:10,
    },
    btn1: {
        backgroundColor: '#555',
     
    },
    btn2: {
        backgroundColor: '#212121',
    },
    btn3: {
        backgroundColor: '#fff',
    },
    btn4: {
        backgroundColor: '#000080',
    },
}))
