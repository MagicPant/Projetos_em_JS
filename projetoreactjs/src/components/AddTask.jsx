import React, {useState} from 'react'

import Button from "./Button"
import "./AddTask.css"


const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState("");
    
    const handleInputChain = (e) => {
        //console.log(e.target.value);
        setInputData(e.target.value);
    }

    const handleTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('')
    }
    
    return(
        <div className= "add-task-container">
            <input 
                onChange={handleInputChain} 
                value={inputData}
                className="add-task-input" 
                type="text" 
            />
            <div className="add-task-button-container">
                <Button onClick={handleTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};

export default AddTask;