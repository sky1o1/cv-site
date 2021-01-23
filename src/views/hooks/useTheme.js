import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { setColors} from '../../store/reducer/colors';

const THEME_COLOR = {
    greyColor: {
        bgColor:'#555',
        color: '#fff'
    },
    blackColor: {
        bgColor:'#000',
        color: '#fff'
    },
    whiteColor: {
        bgColor:'#fff',
        color: '#000'
    },
    blueColor: {
        bgColor:'#255',
        color: '#000'
    }
}
 const useTheme = (color) => {
     const dispatch = useDispatch()
    const [themeColor, setThemeColor] = useState(
        THEME_COLOR[color]
    )

    const updateColor = (color) => {
        const  colorValue =THEME_COLOR[color];
        setThemeColor(colorValue)
    }
    dispatch(setColors(themeColor))
    return [
         themeColor.bgColor,
         themeColor.color,
        updateColor
    ]
}

export default useTheme;
