import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSkills } from '../../store/reducer/skills';
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
    skill: '',
    rating: '',
    abilities: '',
}

function Skills(){
    const dispatch = useDispatch()
    const skills = useSelector(state => state.skills)
    const [SkillsValue, setSkillsValue] = useState('')
    const [fields, setFields] = useState([{ value: null, skval:null }]);

    const handleChange = (event) => {
        const inputFieldName = event.currenTarget.name;
        const inputFieldValue = event.currenTarget.value;
        const updatedSkillsValue = {...skills, [inputFieldName]: inputFieldValue}
        dispatch(setSkills(updatedSkillsValue))
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

    return(
        <div class="lonon-skills">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Abilities</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">My Skills</h2> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 animate-box" data-animate-effect="fadeInLeft">
                    <form onSubmit={formik.handleSubmit} >
                 
                    <TextField
                            id="outlined-multiline-static"
                            fullWidth
                            label="Abilities"
                            multiline
                            rows={15}
                            name='abilities'
                            variant="outlined" 
                            error={Boolean(formik.touched.abilities && formik.errors.abilities)}
                            helperText={formik.touched.abilities && formik.errors.abilities}
                            onBlur={formik.handleBlur}
                            value={formik.values.abilities}
                            onChange={handleChange}
                            />
               
             </form>
                     </div>
                  
                    <div class="col-md-7 animate-box" data-animate-effect="fadeInLeft">
                        
   
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
           
           <TextField 
           id="outlined-basic" 
           label="Skill" 
           name='skill'
           variant="outlined"
           error={Boolean(formik.touched.skill && formik.errors.skill)}
           helperText={formik.touched.skill && formik.errors.skill}
           onBlur={formik.handleBlur}
           value={formik.values.skill}
           onChange={handleChange} 
           />
             <Slider
                    defaultValue={50}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    onBlur={formik.handleBlur}
                    // value={formik.values.rating}
                    onChange={handleChange}
                    step={10}
                    marks
                    min={10}
                    max={100}
                />
            <Button variant="contained" type="button" color="secondary" onClick={() => handleRemove(idx)}>
              X
            </Button>
          </div>
        );
      })}
         <Button variant="contained" type="button" color="primary" onClick={() => handleAdd()}>
        +
      </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;