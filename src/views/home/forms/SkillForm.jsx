import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {getRequest, postRequest} from '../../../services/axios.config';
import validationSchema from '../validationSchema/validationSchemaSkills';
import { setSkills } from '../../../store/reducer/skills';
import {
  TextField,
  Slider,
  makeStyles,
  Grid,
  Button
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';

const initialValues = {
  skill: '',
  rating: 50,
}

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
  const skill = useSelector(state => state.skills)
  const classes = useClasses()
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values.skill)
      console.log(values.rating)
      dispatch(setSkills(values))

  //   async function fetchApi() {
  //     try{
  //         await postRequest('/api/auth/add-skills',{
  //           skillName: values.skill,
  //           skills_order: values.rating
  //         });
  //     }catch(err){
  //         console.log(err)
  //     }
  // }
  //  fetchApi()
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

    useEffect(() => {
      async function fetchApi() {
        try{
            let response = await getRequest('');
        }catch(err){
            console.log(err)
        }
    }
     fetchApi()
    },[])
    
  return (
    <>
      <Grid  container  spacing={1} >
        <Grid item xs={12} sm >
          <TextField
            multiline
            size='small'
            placeholder="Skill"
            variant="outlined"
            error={Boolean(formik.touched.skill && formik.errors.skill)}
            helperText={formik.touched.skill && formik.errors.skill}
            onChange={formik.handleChange('skill')}
            onBlur={formik.handleBlur}
          />
        
        </Grid>

        <Grid container className="sliderGrid" item xs={10} sm={8} alignItems="center"justify="center">
    
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