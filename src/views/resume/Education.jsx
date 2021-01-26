import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@material-ui/core';
import EducationForm from './forms/EducationForm';


function Education({color}) {
   const [formList, setFormList] = useState([1])

   function handleAdd() {
    setFormList(prevFormList => ([
        ...prevFormList, uuidv4()
        ]))
 }
console.log('colorssss',color)
    function handleRemove(id) {
    const index = formList.indexOf(id);
    const updatedFormClone = [...formList];
    updatedFormClone.splice(index, 1)
    setFormList(updatedFormClone)
    }

    return (
        <div class="lonon-lonon-timeline">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12" > <span style={{color: color.headColor}} class="heading-meta style-1">Resume</span>
                        <h2 class="lonon-heading animate-box" style={{color: color.headColor}} data-animate-effect="fadeInLeft">Education</h2> </div>
                </div>
                <div class="row">
                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                    <Button variant="contained" type="button" color="primary" onClick={handleAdd}>
                                        +
                                    </Button>
                                   {
                                       formList.map(formId => (
                                           <EducationForm key={formId} id={formId} removeEdu={handleRemove} />
                                       ))
                                   }
                </div>
                    </div>
            </div>
        </div>
    )
}

export default Education;
