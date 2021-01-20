import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SkillForm from './forms/SkillForm';
import { Button, TextField } from '@material-ui/core';


function Skills() {
  const [formList, setFormList] = useState([])

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

  return (
    <div class="lonon-skills">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12"> <span class="heading-meta style-1">Abilities</span>
            <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">My Skills</h2>
          </div>
        </div>
        <Button variant="contained" type="button" color="primary" onClick={() => handleAdd()}>
            +
      </Button>
        <div class="row">
        <div class="col-md-5 animate-box" data-animate-effect="fadeInLeft">
            <form >

              <TextField
                fullWidth
                label="Ability description"
                multiline
                rows={10}
                name='abilities'
                variant="outlined"
                // error={Boolean(formik.touched.abilities && formik.errors.abilities)}
                // helperText={formik.touched.abilities && formik.errors.abilities}
                // onChange={formik.handleChange}
              />

            </form>
          </div>
          <div class="col-md-7 animate-box" data-animate-effect="fadeInLeft">
          {
            formList.map(formId => (
              <SkillForm key={formId} id={formId} removeSkill={handleRemove} />
            ))
          }
          </div>
         
        </div>

      </div>

    </div>

  )
}

export default Skills;