import React, { useState, useEffect } from 'react';
import styles from './Update_Task.module.css';

const Update_Task = ({id, updateTask}) => {
  const [empArr, setEmpArr] = useState([]);
  useEffect(() => {
    const assignees = JSON.parse(localStorage.getItem('employeesArray'));
    setEmpArr(assignees);
  }, []);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        assignee: '',
        due_date: '',
        });
        const handleSubmit = (event) => {
        event.preventDefault();

        // const jsonData = JSON.stringify(formData);
        setFormData({
            title: '',
            description: '',
            assignee: '',
            due_date: '',
        });

        updateTask({
            id,
            ...formData,
        });
        };

        const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        };
  return (
    <div className={styles.updateTask}>
      <div className={styles.taskBot}>
      <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <label htmlFor="email">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <label htmlFor="assignee">Assignee:</label>
          <select name="assignee" id="assignee" value={formData.assignee} onChange={handleChange}>
              <option value="">Select assignee</option>
              {empArr.map((emp) => (
                <option key={emp.id} value={emp.name}>{emp.name}</option>
              ))}
            </select>

          <label htmlFor="due_date">Due Date:</label>
          <input
            type="text"
            id="due_date"
            name="due_date"
            value={formData.due_date}
            onChange={handleChange}
          ></input>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update_Task