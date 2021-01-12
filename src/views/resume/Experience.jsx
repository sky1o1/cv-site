import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setExperience } from '../../store/reducer/experience';
import validationSchema from './validationSchema/validationSchemaExp';
import * as Yup from 'yup';
import {
    makeStyles,
    TextField,
    InputAdornment,
    Slider,
    Button
} from '@material-ui/core';
import Footer from '../Footer';
import { useFormik } from 'formik';


const initialValues = {
    company: '',
    post: '',
    description: '',
    startYear: '',
    endYear: '',
}

function Experience() {
    const [fields, setFields] = useState([{ value: null}]);
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(setExperience(values))
        },
        validationSchema
      })

    function handleAddExp() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }

    const handleSubmit  = async () => {
        console.log('entered')
        await formik.submitForm()
    }

    function handleRemoveExp(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }
   
    return(
        <div class="lonon-lonon-timeline">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12"> <span class="heading-meta style-1">Resume</span>
                                <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Experience</h2> </div>
                        </div>
                        <form >
                        <div class="row">
                            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                               
                                {fields.map((field, idx) => {
                                    return (
                                        <div key={`${field}-${idx}`}>
                                <Button variant="contained" type="button" color="primary" onClick={() => handleAddExp()}>
                                    +
                                </Button>
                                <ul class="lonon-timeline">
                                    <li>
                                        <div class="lonon-timeline-content">
                                            <span >
                                            <TextField
                                                        id="date"
                                                        label="Start year"
                                                        type="date"
                                                        name='startYear'
                                                        size="small"
                                                        variant="outlined"
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.startYear}
                                                        onChange={formik.handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                        </span>
                                        <h4>--</h4>
                                        <span >
                                            <TextField
                                                        id="date"
                                                        label="End year"
                                                        type="date"
                                                        name='endYear'
                                                        size="small"
                                                        variant="outlined"
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.endYear}
                                                        onChange={formik.handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                        </span>
                                        
                                        
                                                
                                            <h5>
                                            <TextField id="standard-basic" onChange={formik.handleChange} name='company' label="Company" />
                                            </h5>
                                            <h4>
                                            <TextField id="standard-basic" onChange={formik.handleChange} name='post' label="Post" />
                                            </h4>
                                            <p>
                                            <TextField
                                             multiline 
                                             size='small'
                                             rows={5}
                                             name='description' 
                                             label="Description" 
                                             onChange={formik.handleChange}
                                             />
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <span>
                                            <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveExp(idx)}>
                                                X
                                                </Button>
                                                </span>   
                                               
                                        </div>
                                    );
                                })}
                                 <span>
                                            <Button variant="contained" 
                                            onClick={handleSubmit} color="secondary" >
                                               submit
                                                </Button>
                                                </span>   
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
    )
}

export default Experience;