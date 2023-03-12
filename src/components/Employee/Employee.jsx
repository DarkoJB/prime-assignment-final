import React, { useState } from 'react';
import styles from './Employee.module.css';
import Update_Employee from '../Update_Employee/Update_Employee';
const Employee = ({
  id,
  name,
  email,
  phone_number,
  date_birth,
  salary,
  updateEmployee,
  deleteEmployee,
}) => {
  const [clicked, setClicked] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
    <div>
      <div className={styles.employeeTop}>
        <p className={styles.text}>{name}</p>
        <ul className={styles.list}>
          <li>
            <button
              className={styles.button}
              onClick={() => setClicked(!clicked)}
            >
              Read
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={handleClick}>
              Update
            </button>
          </li>
          <li>
            <button
              className={styles.button}
              onClick={() => deleteEmployee(id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
      {clicked && (
        <div className={styles.empBot}>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone_number}</p>
          <p>{date_birth}</p>
          <p>{salary}</p>
        </div>
      )}
      {isOpen && (
        <div>
          <Update_Employee id={id} updateEmployee={updateEmployee} />
        </div>
      )}
    </div>
    <hr className={styles.line}/>
    </>
  );
};

export default Employee;
