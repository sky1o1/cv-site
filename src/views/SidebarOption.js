import React from 'react'
// import './SidebarOption.css' ;
import { useHistory } from 'react-router-dom';

function SidebarOption({title,id}){

    const history = useHistory();

    const selectChannel = () =>{
        if(id){
            history.push(`/room/${id}`)
        }else{
            history.push(title)
        }
    }


    return (
        <div onClick={selectChannel}>
                 {title}
        </div>
    )
}

export default SidebarOption
