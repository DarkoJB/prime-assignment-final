import React, { useEffect, useState } from 'react';
import styles from '../../components/Create_Task/Create_Task.module.css';

const Create_Task = ({ updateTaskArr }) => {
  const [empArr, setEmpArr] = useState([]);
  const [taskId, setTaskId] = useState(0);
  const [taskArr, setTaskArr] = useState([]);

  useEffect(() => {
    const assignees = JSON.parse(localStorage.getItem('employeesArray'));
    setEmpArr(assignees);
    const tasks = JSON.parse(localStorage.getItem('tasksArray'));
    setTaskArr(tasks);
    getLastId(tasks);
  }, []);

  const getLastId = (tasks) => {
    if (tasks.length) {
      let lastTask = tasks[tasks.length - 1];
      let lastId = lastTask.id;
      setTaskId(lastId + 1);
    } else {
      setTaskId(0);
    }
  };

  const [clicked, setClicked] = useState(false);

  const [formData, setFormData] = useState({
    id: taskId,
    title: '',
    description: '',
    assignee: '',
    due_date: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(taskId, 'ID');
    console.log(formData.assignee);
    const newTask = {
      ...formData,
      id: taskId,
    };

    const newTaskArr = [...taskArr, newTask];

    setTaskArr(newTaskArr);
    updateTaskArr(newTask);
    localStorage.setItem('tasksArray', JSON.stringify(newTaskArr));
    setTaskId(taskId + 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData.assignee);
  };
  return (
    <div>
      <button className={styles.button} onClick={() => setClicked(!clicked)}>
        Add Task
      </button>
      {clicked && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <p>
            Assignee{' '}
            <select name="assignee" id="assignee" value={formData.assignee} onChange={handleChange}>
              <option value="">Select assignee</option>
              {empArr.map((emp) => (
                <option key={emp.id} value={emp.name}>{emp.name}</option>
              ))}
            </select>
          </p>
          <label htmlFor="due_date">Due Date:</label>
          <input
            type="text"
            id="due_date"
            name="due_date"
            value={formData.due_date}
            onChange={handleChange}
          ></input>
          <button type="submit" className={styles.button}>Save Task</button>
        </form>
      )}
    </div>
  );
};

export default Create_Task;
