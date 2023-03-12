import React, { useEffect, useState } from 'react';
import Task from '../../components/Task/Task';
import Create_Task from '../../components/Create_Task/Create_Task';

const Tasks = () => {
    const [taskArr, setTaskArr] = useState([]);

    const updateTask = (updatedTask) => {
      const newTaskArr = taskArr.map((tsk) =>
        tsk.id === updatedTask.id ? updatedTask : tsk
      );
      setTaskArr(newTaskArr);
  
      localStorage.setItem('tasksArray', JSON.stringify(newTaskArr));
    };
  
    const updateTaskArr = (newTask) => {
      setTaskArr([...taskArr, newTask]);
    };
  
    const deleteTask = (id) => {
      const updatedTaskArr = taskArr.filter((task) => task.id !== id);
      setTaskArr(updatedTaskArr);
      localStorage.setItem('tasksArray', JSON.stringify(updatedTaskArr));
    };
  
    useEffect(() => {
      setTaskArr(JSON.parse(localStorage.getItem('tasksArray')));
    }, []);

    return (
        <>
        <h1>Tasks</h1>
        <Create_Task updateTaskArr={updateTaskArr}/>
        {taskArr && taskArr.map(({ id, title, description, assignee, due_date }) => (
            <Task
                title={title}
                description={description}
                assignee={assignee}
                due_date={due_date}
                id={id}
                key={id}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
        ))}
        </>
    );
};

export default Tasks;