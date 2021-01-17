import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEducation } from '../../store/reducer/education';
import validationSchema from './validationSchema/validationSchemaEdu';
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
    university: '',
    degree: '',
    description: '',
    startYear: '',
    endYear: '',
}


function Education() {
    const dispatch = useDispatch()
    const [fieldsUni, setFieldsUni] = useState([{ value: null }]);

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(setEducation(values))
        },
        validationSchema
    })

    const handleSubmit  = async () => {
        await formik.submitForm()
    }
    
        function handleAddUni() {
        const values = [...fieldsUni];
        values.push({ value: null });
        setFieldsUni(values);
    }

    function handleRemoveUni(i) {
        const values = [...fieldsUni];
        values.splice(i, 1);
        setFieldsUni(values);
    }

    return (
        <div class="lonon-lonon-timeline">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Resume</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Education</h2> </div>
                </div>
                    <form >
                <div class="row">
                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        {fieldsUni.map((field, idx) => {
                            return (
                                <div key={`${field}-${idx}`}>
                                    <Button variant="contained" type="button" color="primary" onClick={() => handleAddUni()}>
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
                                                        onChange={formik.handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </span>
                                                <h5>
                                                    <TextField 
                                                    id="standard-basic" 
                                                    name='university' 
                                                    label="University"
                                                    size="small"
                                                    variant="outlined"
                                                    onChange={formik.handleChange} 
                                                    />
                                                </h5>
                                                <h4>
                                                    <TextField 
                                                    id="standard-basic" 
                                                    name='degree' 
                                                    label="Degree" 
                                                    size="small"
                                                    variant="outlined"
                                                    onChange={formik.handleChange}
                                                    />
                                                </h4>
                                                <p>
                                                    <TextField
                                                        multiline
                                                        size='small'
                                                        rows={5}
                                                        name='description'
                                                        label="Description"
                                                        variant="outlined"
                                                        onChange={formik.handleChange}
                                                    />
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <span>
                                        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveUni(idx)}>
                                            X
                                        </Button>
                                    </span>
                                    <span>
                                        <Button variant="contained" color="secondary" onClick={handleSubmit} >
                                            Submit
                                        </Button>
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Education;