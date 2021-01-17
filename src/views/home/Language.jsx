import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../store/reducer/language';
import validationSchema from './validationSchema/validationSchemaLanguage';
import {
    makeStyles,
    TextField,
    InputAdornment,
    Slider,
    Button
} from '@material-ui/core';
import { useFormik } from 'formik';


const initialValues = {
    language: '',
    listening: 2.5,
    writing: 2.5,
    speaking: 2.5,
    reading: 2.5,
    avg: '',
}

function Language() {
    const dispatch = useDispatch()
    const [fields, setFields] = useState([{ value: null, skval: null }]);
    const [avg, setAvg] = useState([])
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log('values', values)
            dispatch(setLanguage(values))
        },
        validationSchema
    })
   
    const handleSubmit = async () => {
        await formik.submitForm()
    }
      
      const handleChange = name => (event, value) => {
        console.log(name, value)
          formik.setFieldValue(name, value)
      }

    function handleAdd() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }

    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    console.log(formik.values)

    return (
        <div class="lonon-lonon-timeline">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Expertise</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Language</h2> </div>
                </div>
                <form>
                <div class="row">
                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        {fields.map((field, idx) => {
                            return (
                                <div key={`${field}-${idx}`}>
                                    <Button variant="contained" type="button" color="primary" onClick={() => handleAdd()}>
                                        +
                                </Button>
                                    <ul class="lonon-timeline">
                                        <li>
                                            <div class="lonon-timeline-content">
                                                <span >
                                                    <TextField
                                                        label="Language"
                                                        name='language'
                                                        size="small"
                                                        variant="outlined"
                                                        error={Boolean(formik.touched.language && formik.errors.language)}
                                                        helperText={formik.touched.language && formik.errors.language}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.language}
                                                        onChange={formik.handleChange}
                                                    />
                                                    <h5>listening</h5>
                                                    <Slider
                                                        defaultValue={2.5}
                                                        name='listening'
                                                        valueLabelDisplay="auto"
                                                        onChange={handleChange('listening')}
                                                        step={0.5}
                                                        marks
                                                        min={1}
                                                        max={5}
                                                    />
                                                     <h5>writing</h5>
                                                    <Slider
                                                        defaultValue={2.5}
                                                        name='writing'
                                                        valueLabelDisplay="auto"
                                                        onChange={handleChange('writing')}
                                                        step={0.5}
                                                        marks
                                                        min={1}
                                                        max={5}
                                                    />
                                                     <h5>speaking</h5>
                                                    <Slider
                                                        defaultValue={2.5}
                                                        name='speaking'
                                                        valueLabelDisplay="auto"
                                                        onChange={handleChange('speaking')}
                                                        step={0.5}
                                                        marks
                                                        min={1}
                                                        max={5}
                                                    />
                                                     <h5>reading</h5>
                                                    <Slider
                                                        defaultValue={2.5}
                                                        name='reading'
                                                        valueLabelDisplay="auto"
                                                        onChange={handleChange('reading')}
                                                        step={0.5}
                                                        marks
                                                        min={1}
                                                        max={5}
                                                    />
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <span>
                                        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemove(idx)}>
                                            X
                                    </Button>
                                    </span>
                                    <span>
                                        <Button onClick={handleSubmit}
                                        variant="contained" type="button" color="secondary">
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

export default Language;