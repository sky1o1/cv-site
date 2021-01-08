import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../new.css';
import '../animate.css';
import '../bootstrap.css';
import SidebarOption from './SidebarOption';
import {setProfile} from '../store/actions/';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const initValues = {
    fullname: '',
    profession: '',
    image: '',
}

const validationSchema = Yup.object({
    fullname: Yup.string().required('Name is required'),
    profession: Yup.string().required('Type is required'),
})

function Sidebar() {
    const [image, setImage] = useState('/static/images/avatar.png')
    const dispatch = useDispatch()
   
    const wrapperRef = useRef(null)

       const formik = useFormik({
        initValues,
        onSubmit: (values, onSubmitProps) => {
            // dispatch(setProfile(values.image))
            onSubmitProps.setSubmitting(false)
        },
        validationSchema
    })
    
    return (

        <aside id="lonon-aside">
         <form onSubmit={formik.handleSubmit}>
            <h1 id="lonon-logo">
              <div onClick={() => wrapperRef.current.click() }   >
              <div>
                    {/* {formik.values.image ?
                      (formik.values.image &&
                         <img  src={URL.createObjectURL(formik.values.image)} />) : */}
                           <img  src={image} alt='Upload a pic' />

                        {/* } */}

              </div>
                      </div>

               
            <input
                fullWidth
                type="file"
                label="Image"
                name="image"
                ref={wrapperRef}
                onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                    {
                        formik.values.image &&
                        setImage(URL.createObjectURL(formik.values.image))
                    }

                }}
                style={{
                    display: 'none'
                }}
              />
            </h1>
   
            </form>
            <nav id="lonon-main-menu">
                <ul>
                    <li><a><SidebarOption  title="home"/></a></li>
                    <li><a><SidebarOption  title="resume"/></a></li>
                    <li><a><SidebarOption  title="portfolio"/></a> </li>
                    <li><a><SidebarOption  title="services"/></a></li>
                    <li><a><SidebarOption  title="blog"/></a></li>
                    <li><a><SidebarOption  title="contact"/></a> </li>
                </ul>
            </nav>
        </aside>
        

      
  
    )
}

export default Sidebar
