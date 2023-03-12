import React, { useEffect, useState } from 'react';
import Employee from '../../components/Employee/Employee';
import Create_Employee from '../../components/Create_Employee/Create_Employee';

const Employees = () => {
  const [empArr, setEmpArr] = useState([]);

  const updateEmployee = (updatedEmployee) => {
    const newEmpArr = empArr.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setEmpArr(newEmpArr);

    localStorage.setItem('employeesArray', JSON.stringify(newEmpArr));
  };

  const updateEmployeeArr = (newEmployee) => {
    setEmpArr([...empArr, newEmployee]);
  };

  const deleteEmployee = (id) => {
    const updatedEmpArr = empArr.filter((emp) => emp.id !== id);
    setEmpArr(updatedEmpArr);
    localStorage.setItem('employeesArray', JSON.stringify(updatedEmpArr));
  };

  useEffect(() => {
    setEmpArr(JSON.parse(localStorage.getItem('employeesArray')));
  }, []);

  return (
    <>
      <h1>Employees</h1>
      <Create_Employee updateEmployeeArr={updateEmployeeArr} />
      {empArr.map(({ id, name, email, phone_number, date_birth, salary }) => (
        <Employee
          name={name}
          email={email}
          phone_number={phone_number}
          date_birth={date_birth}
          salary={salary}
          id={id}
          key={id}
          updateEmployee={updateEmployee}
          deleteEmployee={deleteEmployee}
        />
      ))}
    </>
  );
};

export default Employees;
