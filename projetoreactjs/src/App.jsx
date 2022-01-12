import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router,Route} from "react-router-dom";
import axios from "axios";

import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from './components/TaskDetails'

//exemplo de classe (não precisa utilizar)
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       message: 'hello world',
//     };
//   }
//   componentDidMount(){
//     console.log("foi renderizado pela primeira vez")
//   }

//   handleMessageChangeClick(){
//     this.setState({message: "helloooo"});
//   }

//   render(){
//     return (
//       <>
//         <h1>{this.state.message}</h1>
//         <button onClick={this.handleMessageChangeClick.bind(this)}>mudar mensagem</button>
//       </>
//     )
//   }
// }
// export default App;


const App = () => {
  //const tasks default
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const fetchTasks = async () =>{
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    };

    fetchTasks();
    
  }, []);
  //const mudar estado ao clicar
  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map(task => {
        if (task.id === taskId) return {...task,completed: !task.completed}

        return task;
      });

      setTasks(newTasks);
  }
  //const adicionar task
  const handleTaskAddition = (taskTitle) =>{
      const newTasks = [
        ...tasks,
        {
          id: uuidv4(),
          title: taskTitle,
          completeted: false,
        },
      ];
      setTasks(newTasks);
  }
  //const deletar
  const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter((task) => task.id !== taskId);

      setTasks(newTasks);
      
      
  }
  //função principal
  return (
    //router cria uma especie de "rotas", cada uma um route
    <Router>
        <div className="container">
          <Header />
          <Route 
            path="/" 
            exact 
            render={()=>(
              <>
                <AddTask handleTaskAddition = {handleTaskAddition} />
                <Tasks 
                  tasks={tasks} 
                  handleTaskClick = {handleTaskClick} 
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            )}
          />
          <Route path="/:TaskTitle" exact component={TaskDetails}/>
        </div>
    </Router>
  );
};
export default App;
