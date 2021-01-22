import {useState} from 'react'
import {makeStyles} from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { setColors} from '../../store/reducer/colors';

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
    root: {
        '&$disabled $notchedOutline': {
           borderColor: 'orange'
        }
     },
}))

// const [bgColor, setBgColor] = useState({
//     backColor: '#000',
//     color: '#fff'
// })

// const dispatch = useDispatch()

// export const greyColor = () => {
//     console.log('grey called')
//     setBgColor(prevData => (
//         { ...prevData, backColor: '#555', color: '#fff' }
//     ))
//     const updatedColor = { ...bgColor,  backColor: '#555', color: '#fff'}
//     dispatch(setColors(updatedColor))
// }

// export const blackColor = () => {
//     console.log('black called')
//     setBgColor(prevData => (
//         { ...prevData, backColor: '#000', color: '#fff' }
//     ))
//     const updatedColor = { ...bgColor,  backColor: '#000', color: '#fff'}
//     dispatch(setColors(updatedColor))
// }

// export const whiteColor = () => {
//     console.log('white called')
//     setBgColor(prevData => (
//         { ...prevData, backColor: '#fff', color: '#000' }
//     ))
//     const updatedColor = { ...bgColor,  backColor: '#fff', color: '#000' }
//     dispatch(setColors(updatedColor))
// }

// export const blueColor = () => {
//     console.log('white called')
//     setBgColor(prevData => (
//         { ...prevData, backColor: '#000080', color: '#fff' }
//     ))
//     const updatedColor = { ...bgColor, backColor: '#000080', color: '#fff'}
//     dispatch(setColors(updatedColor))
// }
