import React, { useState } from 'react';
import styles from '../../components/Update_Employee/Update_Employee.module.css';

const Update_Employee = ({ id, updateEmployee }) => {
  // const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    date_birth: '',
    salary: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    // const jsonData = JSON.stringify(formData);
    setFormData({
      name: '',
      email: '',
      phone_number: '',
      date_birth: '',
      salary: '',
    });

    updateEmployee({
      id,
      ...formData,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.updateEmp}>
      <div className={styles.employeeBot}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          ></input>

          <label htmlFor="phone_number">Date of birth:</label>
          <input
            type="date"
            id="date_birth"
            name="date_birth"
            value={formData.date_birth}
            onChange={handleChange}
          ></input>

          <label htmlFor="phone_number">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          ></input>

          <button className={styles.button} type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update_Employee;
