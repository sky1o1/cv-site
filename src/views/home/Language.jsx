import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
                <DragDropContext>
                <Droppable droppableId="language">
                {(provided) => (
                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft" {...provided.droppableProps} ref={provided.innerRef}>
                                    <Button variant="contained" type="button" color="primary" onClick={handleAdd}>
                                        +
                                </Button>
                                {
                                       formList.map(formId => (
                                        <Draggable key={formId} draggableId={formId} >
                                            {(provided) => (
                                           <LanguageForm ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  id={formId} removeLanguage={handleRemove} />
                                            )}
                                           </Draggable>
                                       ))
                                   }
                                </div>
                )}
                                </Droppable>
                </DragDropContext>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Language;