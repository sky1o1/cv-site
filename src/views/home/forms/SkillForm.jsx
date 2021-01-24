import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from '../validationSchema/validationSchemaSkills';
import { setSkills } from '../../../store/reducer/skills';
import {
  TextField,
  Slider,
  makeStyles,
  Grid,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const initialValues = {
  skill: '',
  rating: '50',
  abilities: '',
}

const useStyles = makeStyles((theme) => ({
  sliderTrack: {
    height: 4,
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  },
  textBox: {
    width: 'auto',
  }
}));

function SkillForm({ id, removeSkill }) {
  const dispatch = useDispatch()
const classes = useStyles()
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
      <Grid  container >
        <Grid item xs>
          <TextField
          className={classes.textBox}
            multiline
            size='small'
            placeholder="Skill name"
            name='skill'
            variant="outlined"
            error={Boolean(formik.touched.skill && formik.errors.skill)}
            helperText={formik.touched.skill && formik.errors.skill}
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid style={{paddingInline: 20}} item xs={8}>
          <Slider
            classes={{ container: classes.slider, track: classes.sliderTrack }}
            defaultValue={50}
            style={{justifyContent:'center',alignItems:'center'}}
            name='rating'
            valueLabelDisplay="auto"
            onChange={handleChange('rating')}
            step={10}
            marks
            min={10}
            max={100}
          />
        </Grid>

        <Grid item xs>
        <IconButton onClick={() => removeSkill(id)} >
          <DeleteIcon fontSize="small" />
        </IconButton>
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