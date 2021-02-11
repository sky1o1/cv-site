import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {getRequest, postRequest} from '../../services/axios.config';
import SkillForm from './forms/SkillForm';
import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import validationSchema from './validationSchema/validationSchemaSkills';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';


const initialValues = {
 abilities: ''
}

function Skills({color, greyG, blackG, whiteG, blueG}) {
  const [formList, setFormList] = useState([1,2,3])
  const formik = useFormik({
    initialValues,
   validationSchema
  })

  function handleAdd() {
    setFormList(prevFormList => ([
      ...prevFormList, uuidv4()
    ]))
  }

  function handleRemove(id) {
    const index = formList.indexOf(id);
    const updatedFormClone = [...formList];
    updatedFormClone.splice(index, 1)
    setFormList(updatedFormClone)
  }

    // useEffect(() => {
    //     async function fetchApi() {
    //         try{
    //             let response = await postRequest('');
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //      fetchApi()
    // },[])

  return (
    <div class="lonon-skills">
      <div class="container-fluid" >
     
        <div class="row">
            <div class="col-md-12"> <span  class="heading-meta style-1">Job Preferences</span>
            <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft" >& My Skills</h2> </div>
        </div>
     
        <div class="row">
        <div class="col-md-5 animate-box" data-animate-effect="fadeInLeft">
            <form >

              <TextField
                fullWidth
                placeholder="Skills description"
                multiline
                rows={8}
                name='abilities'
                variant="outlined"
                error={Boolean(formik.touched.abilities && formik.errors.abilities)}
                helperText={formik.touched.abilities && formik.errors.abilities}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

            </form>
          </div>
          <div class="col-md-7 animate-box" data-animate-effect="fadeInLeft">
          {
            formList.map(formId => (
              <SkillForm key={formId} id={formId} removeSkill={handleRemove} />
            ))
          }
          <Button style={{marginTop:9}} startIcon={<AddCircleOutlineOutlinedIcon />} size="small" variant="contained" type="button" color="primary" onClick={() => handleAdd()}>
               Add Skill
          </Button>
          </div>
         
        </div>
      </div>

    </div>

  )
}

export default Skills;