import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from '../validationSchema/validationSchemaSkills';
import {setSkills} from '../../../store/reducer/skills';
import {
    TextField,
    Slider,
    Button,
    Grid
} from '@material-ui/core';

const initialValues = {
    skill: '',
    rating: '50',
    abilities: '',
  }


function SkillForm({id, removeSkill}) {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(setSkills(values))
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
          <Grid container >
                <Grid item xs={3}>
                  <TextField
                    multiline
                    label="Skill"
                    name='skill'
                    error={Boolean(formik.touched.skill && formik.errors.skill)}
                    helperText={formik.touched.skill && formik.errors.skill}
                    onChange={formik.handleChange}
                  />
                  </Grid>
                  
                  <Grid item xs={8}>
                  <Slider
                    defaultValue={50}
                    name='rating'
                    valueLabelDisplay="auto"
                    onChange={handleChange('rating')}
                    step={10}
                    marks
                    min={10}
                    max={100}
                  />
                  </Grid>

                  <Grid item xs={2}>
                    <Button variant="contained" type="button" color="secondary" onClick={() => removeSkill(id)}>
                      X
                    </Button>
                  </Grid>
               
          </Grid>
                  
      {/* <span>
        <Button
          onClick={handleSubmit}
          variant="contained"
          type="button"
          color="primary"
        >
          Submit
        </Button>
      </span> */}
        </>
    )
}

export default SkillForm;