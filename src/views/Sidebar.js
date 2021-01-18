import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setProfile, setProfileImage} from '../store/reducer/profile';
import { createMuiTheme } from "@material-ui/core/styles"
import {
    makeStyles,
    AppBar,
    TextField,
    Toolbar,
    IconButton,
    Button,
    Typography,
    Switch,
    Paper,
    ThemeProvider
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import '../new.css';
import '../animate.css';
import '../bootstrap.css';
import SidebarOption from './SidebarOption';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { green } from '@material-ui/core/colors';

const initValues = {
    fullName: '',
    profession: '',
    profileImage: '/static/images/avatar.png',
}

const validationSchema = Yup.object({
    fullName: Yup.string().required('Name is required'),
    profession: Yup.string().required('Type is required'),
})

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))

function Sidebar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const wrapperRef = useRef(null)
    const profile = useSelector(state => state.profile)
    const [bgColor, setBgColor] = useState(false);
    const [theme, setTheme] = useState(true);

    const formik = useFormik({
        initialValues: initValues,
        validationSchema
    })

    // const darkTheme = createMuiTheme({
    //     pallete: {
    //         type:  'dark', 
    //     },
    //     background: '#FF8E53 '
    // })

    // const lightTheme = createMuiTheme({
    // })


    const handleChange = ( event) => {
        const inputFieldName = event.currentTarget.name
        const inputFieldValue = event.currentTarget.value
        const updatedProfileData = {...profile, [inputFieldName]: inputFieldValue}
        dispatch(setProfile(updatedProfileData))
        formik.setFieldValue(inputFieldName, inputFieldValue)
      }

      const light = {
        palette: {
          type: "light"
        }
      };
      const dark = {
        palette: {
          type: "dark"
        }
      };

      
    const appliedTheme = createMuiTheme(theme ? light : dark);

      
    return (
        <>
       <div>
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      <ThemeProvider theme={appliedTheme}>
        <aside id="lonon-aside">
           <Paper>
            <form onSubmit={formik.handleSubmit}>
                <section id="lonon-logo">
                    <div onClick={() => wrapperRef.current.click()}   >
                        {
                            formik.initialValues.profileImage &&
                            <img src={formik.values.profileImage} />
                        }
                    </div>


                    <input
                        fullWidth
                        type="file"
                        label="Image"
                        name="profileImage"
                        ref={wrapperRef}
                        onChange={(event) => {
                            const selectedFile = event.currentTarget.files[0]
                            const selectedUrl = URL.createObjectURL(selectedFile)
                            formik.setFieldValue("profileImage", selectedUrl);
                            console.log(selectedFile)
                            dispatch(setProfileImage(selectedUrl))

                        }}
                        style={{
                            display: 'none'
                        }}
                    />
                    <TextField
                        className="textfield"
                        fullWidth
                        name='fullName'
                        label="Full name"
                        error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                        onChange={handleChange}
                    />
                    <TextField
                        className="textfield"
                        id="standard-basic"
                        fullWidth
                        name='profession'
                        label="Profession"
                        error={Boolean(formik.touched.profession && formik.errors.profession)}
                        helperText={formik.touched.profession && formik.errors.profession}
                        onBlur={formik.handleBlur}
                        value={formik.values.profession}
                        onChange={handleChange}
                    />
                </section>

            </form>
            <nav id="lonon-main-menu">
                <ul>
                    <li><a><SidebarOption title="home" /></a></li>
                    <li><a><SidebarOption title="resume" /></a></li>
                    <li><a><SidebarOption title="portfolio" /></a> </li>
                    <li><a><SidebarOption title="services" /></a></li>
                    <li><a><SidebarOption title="blog" /></a></li>
                    <li><a><SidebarOption title="contact" /></a> </li>
                </ul>
            </nav>
                <Switch 
                checked={theme}
                onChange={() => setTheme(!theme)}
                />
            </Paper>
            
                <h1>Test</h1>
                <Button variant='contained' onClick={() => setTheme(!theme)} color="primary">Dark mode</Button>

        </aside>
            </ThemeProvider>
        </div>
</>

    )
}

export default Sidebar
