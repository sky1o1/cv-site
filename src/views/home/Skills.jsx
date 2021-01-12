import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSkills } from '../../store/reducer/skills';
import validationSchema from './validationSchema/validationSchemaSkills';
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
    rating: '50',
    abilities: '',
}

function Skills(){
    const dispatch = useDispatch()
    const [fields, setFields] = useState([{ value: null, skval:null }]);
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
          dispatch(setSkills(values))
        },
        // validationSchema
    })

    const handleChange = name => (event, value) => {
        const skillVal = {[name]: value}
        formik.setFieldValue(name, value)
    }

    const handleSubmit  = async () => {
      await formik.submitForm()
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
                    <form >
                 
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
                            onChange={formik.handleChange}
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
            <Button variant="contained" type="button" color="secondary" onClick={() => handleRemove(idx)}>
              X
            </Button>
          </div>
        );
      })}
         <Button variant="contained" type="button" color="primary" onClick={() => handleAdd()}>
        +
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
                </div>
            </div>
        </div>
    )
}

export default Skills;