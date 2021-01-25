import React, { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button} from '@material-ui/core';
import ExperienceForm from './forms/ExperienceForm';

function Experience({color, greyG, blackG, whiteG, blueG}) {
    const [formList, setFormList] = useState([1])
 
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
   
    return(
        <div class="lonon-lonon-timeline">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12"> <span className={`${greyG} ${blackG} ${whiteG} ${blueG} heading-meta style-1` } >Resume</span>
                                <h2 class="lonon-heading animate-box" className={`${greyG} ${blackG} ${whiteG} ${blueG}`} data-animate-effect="fadeInLeft">Experience</h2> </div>
                        </div>
                        <form >
                        <div class="row">
                            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">

                                <Button variant="contained" type="button" color="primary" onClick={handleAdd}>
                                    +
                                </Button>
                               {
                                   formList.map(formId => (
                                       <ExperienceForm key={formId} id={formId} removeExp={handleRemove}  />
                                   ))
                               }
                                               
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
    )
}

export default Experience;