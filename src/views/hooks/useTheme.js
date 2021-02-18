import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {postRequest} from '../../services/axios.config';
import { setColors} from '../../store/reducer/colors';

const THEME_COLOR = {
    pinkColor: {
        bgColor:'#BB377D',
        color: '#fff',
        headColor: '#f15f79',
        textColor: '#fff',
        gradColor: {
            background: 'linear-gradient(to right top, #BB377D, #f15f79)',
            background: '-webkit-linear-gradient(to right top, #BB377D, #f15f79)',
            background: 'linear-gradient(to right top, #BB377D, #f15f79)',
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
        bgColor:'#ff4b1f',
        color: '#fff',
        headColor: '#ff9068',
        textColor: '#fff',
        gradColor: {
            background: 'linear-gradient(to right top,#ff4b1f,#ff9068 )',
            background:' -webkit-linear-gradient(to right top,#ff4b1f,#ff9068 )',
            background: 'linear-gradient(to right top,#ff4b1f,#ff9068) '
        }
    },
    blueColor: {
        bgColor:'#032481',
        color: '#fff',
        headColor: '#053090',
        textColor: '#fff',
        gradColor: {
            background: 'linear-gradient(to right top, #032481, #053090, #073da0, #0749af, #0556bf)',
            background: 'linear-gradient(to right top, #3a7bd5, #00d2ff)',
            background: 'linear-gradient(to right top, #005AA7, #5691c8)',
            background: '-webkit-linear-gradient(to right top, #032481, #053090, #073da0, #0749af, #0556bf)',
            background: '-webkit-linear-gradient(to right top, #3a7bd5, #00d2ff)',
            background: '-webkit-linear-gradient(to right top,  #005AA7, #5691c8)',
            background: 'linear-gradient(to right top, #032481, #053090, #073da0, #0749af, #0556bf)',
            background: 'linear-gradient(to right top, #3a7bd5, #00d2ff)',
            background: 'linear-gradient(to right top,  #005AA7, #5691c8)',
        }
    },
    greenColor: {
        bgColor:'#56ab2f',
        color: '#fff',
        headColor: '#a8e063',
        textColor: '#fff',
        gradColor: {
            background: 'linear-gradient(to right top,#56ab2f, #a8e063)',
            background: 'linear-gradient(to right top, #02aab0, #00cdac)',
            background: '-webkit-linear-gradient(to right top,#56ab2f, #a8e063)',
            background: '-webkit-linear-gradient(to right top, #02aab0, #00cdac',
            background: 'linear-gradient(to right top,#56ab2f, #a8e063)',
            background: 'linear-gradient(to right top, #02aab0, #00cdac)',
        }
    },
    violetColor: {
        bgColor:'#302b63',
        color: '#fff',
        headColor: '#302b63',
        textColor: '#fff',
        gradColor: {
            background: 'linear-gradient(to right top, #0f0c29, #302b63)',
            background:' -webkit-linear-gradient(to right top, #0f0c29, #302b63)',
            background: 'linear-gradient(to right top, #0f0c29, #302b63)'
        }
    },
    blackColor: {
        bgColor:'#000',
        color: '#fff',
        headColor: '#000',
        textColor: '#fff',
        gradColor: {
            background: 'linear-gradient(to right top,#000, #434343)',
            background: '-webkit-linear-gradient(to right top,#000, #434343)',
            background: 'linear-gradient(to right top,#000, #434343)',
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
