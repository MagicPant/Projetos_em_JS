import React from 'react'
import { useParams } from 'react-router-dom';
import {useHistory} from "react-router-dom"

import Button from './Button';
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();
    const handleBackButtonClick = () =>{
        history.goBack();
    }


    return (
        <>
            <div className="back-button-container" >
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.TaskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Error nihil quos eius, laudantium possimus odit!
                </p>
            </div>
        </>
    );
}

export default TaskDetails;