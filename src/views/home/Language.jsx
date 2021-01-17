import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LanguageForm from './forms/LanguageForm';
import { Button } from '@material-ui/core';

function Language() {
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
        <div class="lonon-lonon-timeline">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Expertise</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Language</h2> </div>
                </div>
                <form>
                <div class="row">
                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                    <Button variant="contained" type="button" color="primary" onClick={handleAdd}>
                                        +
                                </Button>
                                {
                                       formList.map(formId => (
                                           <LanguageForm key={formId} id={formId} removeLanguage={handleRemove} />
                                       ))
                                   }
                                </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Language;