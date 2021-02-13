import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {postRequest} from '../../services/axios.config';
import { setColors} from '../../store/reducer/colors';

const THEME_COLOR = {
    pinkColor: {
        bgColor:'#FC698A',
        color: '#fff',
        headColor: '#ED9BAE',
        textColor: '#fff',
        gradColor: {
            background: '#FC698A',
            background: '-webkit-linear-gradient(to bottom, #FC698A, #ED9BAE)',
            background: 'linear-gradient(to bottom, #FC698A, #ED9BAE)',
        },
    },
    greyColor: {
        bgColor:'#45515D',
        color: '#fff',
        headColor: '#63707A',
        textColor: '#fff',
        gradColor: {
            background: '#45515D',
            background: '-webkit-linear-gradient(to bottom, #45515D, #63707A)',
            background: 'linear-gradient(to bottom, #45515D, #63707A)',
        }
    },
    orangeColor: {
        bgColor:'#DF6339',
        color: '#fff',
        headColor: '#EF8F6A',
        textColor: '#fff',
        gradColor: {
            background:' #DF6339',
            background:' -webkit-linear-gradient(to bottom, #DF6339, #EF8F6A)',
            background: 'linear-gradient(to bottom, #DF6339, #EF8F6A)',
        }
    },
    blueColor: {
        bgColor:'#007CC7',
        color: '#fff',
        headColor: '#007CC7',
        textColor: '#fff',
        gradColor: {
            background: '#007CC7',
            background: '-webkit-linear-gradient(to bottom, #007CC7, #4DA8DA)',
            background: 'linear-gradient(to bottom, #007CC7, #4DA8DA)',
        }
    }
}
 const useTheme = (color) => {
     const dispatch = useDispatch()
    const [themeColor, setThemeColor] = useState(
        THEME_COLOR[color]
    )

    const updateColor = (color) => {
        const colorValue = THEME_COLOR[color];
        setThemeColor(colorValue)
    }
    dispatch(setColors(themeColor))
    return [
         themeColor.bgColor,
         themeColor.color,
         themeColor.headColor,
         themeColor.textColor,
         themeColor.gradColor,
        updateColor
    ]
}

export default useTheme;
