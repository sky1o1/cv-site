import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from '../validationSchema/validationSchemaLanguage';
import {setLanguage} from '../../../store/reducer/language';
import {
    TextField,
    Slider,
    Button
} from '@material-ui/core';

const initialValues = {
    language: '',
    listening: 2.5,
    writing: 2.5,
    speaking: 2.5,
    reading: 2.5,
    avg: '',
}


function LanguageForm({id, removeLanguage}) {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
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

    return (
        <>
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
                                        <Button variant="contained" type="button" color="secondary" onClick={() => removeLanguage(id)}>
                                            X
                                    </Button>
                                    </span>
                                    <span>
                                        <Button onClick={handleSubmit}
                                        variant="contained" type="button" color="secondary">
                                            Submit
                                        </Button>
                                    </span>
        </>
    )
}

export default LanguageForm;