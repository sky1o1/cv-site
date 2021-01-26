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
        backgroundColor: '#0000ff',
    },
    btn33: {
        borderColor: '#000'
    },
    greyGrad: {
        background: '#bdc3c7',
        background: '-webkit-linear-gradient(to right, #2c3e50, #bdc3c7)',
        background: 'linear-gradient(to right, #2c3e50, #bdc3c7)',
    },
    blackGrad: {
        background: '#3C3B3F',
        background: '-webkit-linear-gradient(to right, #605C3C, #3C3B3F)', 
        background: 'linear-gradient(to right, #605C3C, #3C3B3F)',
    },
    whiteGrad: {
        background: '#0F2027', 
        background: '-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)', 
        background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
    },
    blueGrad: {
        background: '#373B44',
        background: '-webkit-linear-gradient(to right, #0000ff, #373B44)',
        background: 'linear-gradient(to right, #0000ff, #373B44)',
    },
}))
