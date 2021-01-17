import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SkillForm from './forms/SkillForm';
import { Button } from '@material-ui/core';


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
        
          {
            formList.map(formId => (
              <SkillForm key={formId} id={formId} removeSkill={handleRemove} />
            ))
          }
        </div>

      </div>

    </div>

  )
}

export default Skills;