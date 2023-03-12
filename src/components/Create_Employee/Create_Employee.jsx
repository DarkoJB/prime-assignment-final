import React, { useState, useEffect } from 'react';
import styles from './Create_Employee.module.css';

const Create_Employee = ({ updateEmployeeArr }) => {
  const [employeeId, setEmployeeId] = useState(0);
  const [employeeArr, setEmployeeArr] = useState([]);
  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employeesArray'));
    setEmployeeArr(employees);
    getLastId(employees);
  }, []);

  const getLastId = (employees) => {
    if (employees.length) {
      let lastEmployee = employees[employees.length - 1];
      let lastId = lastEmployee.id;
      setEmployeeId(lastId + 1);
    } else {
      setEmployeeId(0);
    }
  };

  const [clicked, setClicked] = useState(false);

  const [formData, setFormData] = useState({
    id: employeeId,
    name: '',
    email: '',
    phone_number: '',
    date_birth: '',
    salary: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(employeeId, 'ID');

    const newEmployee = {
      ...formData,
      id: employeeId,
    };

    const newEmpArr = [...employeeArr, newEmployee];

    setEmployeeArr(newEmpArr);
    updateEmployeeArr(newEmployee);
    localStorage.setItem('employeesArray', JSON.stringify(newEmpArr));
    setEmployeeId(employeeId + 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <button className={styles.button} onClick={() => setClicked(!clicked)}>
        Add Employee
      </button>
      {clicked && (
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

          <label htmlFor="date_birth">Date of birth:</label>
          <input
            type="text"
            id="date_birth"
            name="date_birth"
            value={formData.date_birth}
            onChange={handleChange}
          ></input>

          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          ></input>

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Create_Employee;

