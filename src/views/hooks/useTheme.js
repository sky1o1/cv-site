import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { setColors} from '../../store/reducer/colors';

const THEME_COLOR = {
    greyColor: {
        bgColor:'#555',
        color: '#fff',
        headColor: '#555',
        textColor: '#fff'
    },
    blackColor: {
        bgColor:'#000',
        color: '#fff',
        headColor: '#000',
        textColor: '#fff',
    },
    whiteColor: {
        bgColor:'#fff',
        color: '#000',
        headColor: '#000',
        textColor: '#000',
    },
    blueColor: {
        bgColor:'#0000ff',
        color: '#000',
        headColor: '#0000ff',
        textColor: '#fff',
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
        updateColor
    ]
}

export default useTheme;
