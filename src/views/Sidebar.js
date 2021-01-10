import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setProfile} from '../store/reducer/profile';
import {
    makeStyles,
    TextField,
} from '@material-ui/core/';
import '../new.css';
import '../animate.css';
import '../bootstrap.css';
import SidebarOption from './SidebarOption';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const initValues = {
    fullName: '',
    profession: '',
    image: '/static/images/avatar.png',
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
    const [image, setImage] = useState(null)

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: (values, onSubmitProps) => {
            console.log('images in formik', values.image)
            onSubmitProps.setSubmitting(false)
        },
        validationSchema
    })
    const handleChange = ( event) => {
        const inputFieldName = event.currentTarget.name
        const inputFieldValue = event.currentTarget.value
        console.log('name', inputFieldName)
        console.log('value', inputFieldValue)
        const updatedProfileData = {...profile, [inputFieldName]: inputFieldValue}
        console.log('data', updatedProfileData)
        dispatch(setProfile(updatedProfileData))
        formik.setFieldValue(inputFieldName, inputFieldValue)
      }

      
    return (

        <aside id="lonon-aside">
            <form onSubmit={formik.handleSubmit}>
                <section id="lonon-logo">
                    <div onClick={() => wrapperRef.current.click()}   >
                        {
                            formik.initialValues.image &&
                            <img src={formik.values.image} />
                        }
                    </div>


                    <input
                        fullWidth
                        type="file"
                        label="Image"
                        name="image"
                        ref={wrapperRef}
                        onChange={(event) => {
                            const selectedFile = event.currentTarget.files[0]
                            const selectedUrl = URL.createObjectURL(selectedFile)
                            formik.setFieldValue("image", selectedUrl);
                            setImage(selectedFile)
                            // dispatch(setImage(selectedFile))

                        }}
                        style={{
                            display: 'none'
                        }}
                    />
                    <TextField
                        className="textfield"
                        id="standard-basic"
                        fullWidth
                        name='fullName'
                        label="fullName"
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
                        onChange={formik.handleChange}
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
        </aside>




    )
}

export default Sidebar
