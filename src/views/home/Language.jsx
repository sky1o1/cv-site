import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../store/reducer/language';
import validationSchema from './validationSchema/validationSchema';
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
    level: '',
    listening: '',
    writing: '',
    speaking: '',
    reading: '',
    avg: '',
}

function Language() {
    const dispatch = useDispatch()
    const language = useSelector(state => state.language)
    const [fields, setFields] = useState([{ value: null, skval: null }]);

    const handleChange = (event) => {
        const inputFieldName = event.currenTarget.name;
        const inputFieldValue = event.currenTarget.value;
        const updatedLanguageValue = { ...language, [inputFieldName]: inputFieldValue }
        dispatch(setLanguage(updatedLanguageValue))
        formik.setFieldValue(inputFieldName, inputFieldValue)
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

    const formik = useFormik({
        initialValues,
        validationSchema
    })

    return (
        <div class="lonon-lonon-timeline">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Expertise</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Language</h2> </div>
                </div>
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
                                                        onChange={handleChange}
                                                    />
                                                    <h5>listening</h5>
                                                    <Slider
                                                        defaultValue={2.5}
                                                        aria-labelledby="discrete-slider"
                                                        valueLabelDisplay="auto"
                                                        onBlur={formik.handleBlur}
                                                        onChange={handleChange}
                                                        step={0.5}
                                                        marks
                                                        min={1}
                                                        max={5}
                                                    />
                                                     <h5>writing</h5>
                                                    <Slider
                                                        defaultValue={2.5}
                                                        aria-labelledby="discrete-slider"
                                                        valueLabelDisplay="auto"
                                                        onBlur={formik.handleBlur}
                                                        onChange={handleChange}
                                                        step={0.5}
                                                        marks
                                                        min={1}
                                                        max={5}
                                                    />
                                                     <h5>speaking</h5>
                                                    <Slider
                                                        defaultValue={2.5}
                                                        aria-labelledby="discrete-slider"
                                                        valueLabelDisplay="auto"
                                                        onBlur={formik.handleBlur}
                                                        onChange={handleChange}
                                                        step={0.5}
                                                        marks
                                                        min={1}
                                                        max={5}
                                                    />
                                                     <h5>reading</h5>
                                                    <Slider
                                                        defaultValue={2.5}
                                                        aria-labelledby="discrete-slider"
                                                        valueLabelDisplay="auto"
                                                        onBlur={formik.handleBlur}
                                                        onChange={handleChange}
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language;