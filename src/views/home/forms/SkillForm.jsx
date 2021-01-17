import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from '../validationSchema/validationSchemaSkills';
import {setSkills} from '../../../store/reducer/skills';
import {
    TextField,
    Slider,
    Button
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
             <div class="col-md-5 animate-box" data-animate-effect="fadeInLeft">
            <form >

              <TextField
                fullWidth
                label="Abilities"
                multiline
                rows={15}
                name='abilities'
                variant="outlined"
                error={Boolean(formik.touched.abilities && formik.errors.abilities)}
                helperText={formik.touched.abilities && formik.errors.abilities}
                onChange={formik.handleChange}
              />

            </form>
          </div>

          <div class="col-md-7 animate-box" data-animate-effect="fadeInLeft">
                  <TextField
                    label="Skill"
                    name='skill'
                    variant="outlined"
                    error={Boolean(formik.touched.skill && formik.errors.skill)}
                    helperText={formik.touched.skill && formik.errors.skill}
                    onChange={formik.handleChange}
                  />
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
                  <Button variant="contained" type="button" color="secondary" onClick={() => removeSkill(id)}>
                    X
            </Button>
            
      <span>
        <Button
          onClick={handleSubmit}
          variant="contained"
          type="button"
          color="primary"
        >
          Submit
        </Button>
      </span>
          </div>
        </>
    )
}

export default SkillForm;