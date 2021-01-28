import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { setColors} from '../../store/reducer/colors';

const THEME_COLOR = {
    greyColor: {
        bgColor:'#555',
        color: '#fff',
        headColor: '#555',
        textColor: '#fff',
        gradColor: {
            background: '#bdc3c7',
            background: '-webkit-linear-gradient(to right, #2c3e50, #bdc3c7)',
            background: 'linear-gradient(to right, #2c3e50, #bdc3c7)',
        },
    },
    blackColor: {
        bgColor:'#000',
        color: '#fff',
        headColor: '#000',
        textColor: '#fff',
        gradColor: {
            background: '#000000',
            background: '-webkit-linear-gradient(to right, #434343, #000000)',
            background: 'linear-gradient(to right, #434343, #000000)',
        }
    },
    whiteColor: {
        bgColor:'#fff',
        color: '#000',
        headColor: '#000',
        textColor: '#000',
        gradColor: {
            background:' #8e9eab',
            background:' -webkit-linear-gradient(to right, #eef2f3, #8e9eab)',
            background: 'linear-gradient(to right, #eef2f3, #8e9eab)',
        }
    },
    blueColor: {
        bgColor:'#0000ff',
        color: '#000',
        headColor: '#0000ff',
        textColor: '#fff',
        gradColor: {
            background: '#373B44',
            background: '-webkit-linear-gradient(to right, #0000ff, #373B44)',
            background: 'linear-gradient(to right, #0000ff, #373B44)',
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
