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
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const initialValues = {
  skill: '',
  rating: '50',
  abilities: '',
}

// const useStyles = makeStyles((theme) => ({
//   sliderTrack: {
//     height: 4,
//   },
//   track: {
//     height: 8,
//     borderRadius: 4
//   },
//   rail: {
//     height: 8,
//     borderRadius: 4
//   },
//   textBox: {
//     width: 'auto',
//   },
  
// }));
const useClasses = makeStyles(theme => ({
  iconContainer: {
      "&:hover $icon": {
          color: 'black',
          transition : '1s',
       },
  },
  icon: {
      color: 'grey',
  }
}))



function SkillForm({ id, removeSkill }) {
  const dispatch = useDispatch()
  const classes = useClasses()
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
      <Grid  container  spacing={1} >
        <Grid item xs={12} sm >
          <TextField
            className={classes.textBox}
            multiline
            size='small'
            placeholder="Skill"
            name='skill'
            variant="outlined"
            error={Boolean(formik.touched.skill && formik.errors.skill)}
            helperText={formik.touched.skill && formik.errors.skill}
            onChange={formik.handleChange}
          />
        
        </Grid>

        <Grid container className="sliderGrid" item xs={10} sm={8} alignItems="center"justify="center">
    
          <Slider
            classes={{ container: classes.slider, track: classes.sliderTrack }}
            defaultValue={80}
            name='rating'
            valueLabelDisplay="auto"
            onChange={handleChange('rating')}
            step={10}
            marks
            min={10}
            max={100}
         
          />
  
        </Grid>

        <Grid item xs={2} sm={1}>
        <Tooltip title="Delete" placement="right-start">
        <IconButton  
            classes={{
                root: classes.iconContainer
            }} 
            onClick={() => removeSkill(id)} >
          <DeleteOutlineRoundedIcon style={{ fontSize: 18}} className={classes.icon} />
        </IconButton>
        </Tooltip>
        </Grid>
      </Grid>
      {/* <span>
        <Button
          onClick={handleSubmit}
          variant="contained"
          type="button"
          color="primary"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Submit
        </Button>
      </span> */}
    </>
  )
}

export default SkillForm;