import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/api/save-form-data", formData);
      alert("Form data saved successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("An error occurred while saving form data.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;


// In this example code, we define a Form component that uses the useState hook to maintain the state of the form data. When the user submits the form, the handleSubmit function is called, which prevents the default form submission behavior and sends a POST request to an API endpoint (/api/save-form-data) with the form data as the request body.

// Assuming that you have a backend API endpoint that can receive the POST request and save the form data to a JSON database, this code should work as intended.

// To save the data to a local JSON file, you can modify the handleSubmit function in the previous code as follows:
const handleSubmit = (event) => {
  event.preventDefault();

  const jsonData = JSON.stringify(formData);

  // Create a new Blob object with the JSON data
  const file = new Blob([jsonData], { type: "application/json" });

  // Create a new FileWriter object
  const writer = new FileWriter();

  // Write the file to the local filesystem
  writer.write(file);
  writer.saveAs("form-data.json");

  // Reset the form data
  setFormData({ name: "", email: "", message: "" });
};
// In this modified version, we first convert the form data to a JSON string using the JSON.stringify() method. Then, we create a new Blob object with the JSON data and specify the MIME type as application/json.

// Next, we create a new FileWriter object and use its write() method to write the Blob object to the local filesystem. We also provide a filename for the saved file using the saveAs() method.

// Finally, we reset the form data using the setFormData() method.

// // Note that the FileWriter object is not part of React or JavaScript, but rather a browser API that is not supported in all browsers. You may need to use a third-party library like FileSaver.js to achieve similar functionality in older browsers.

// I apologize for the error in my previous response. The FileWriter object is not part of the standard JavaScript API and is not supported by all browsers. Instead, you can use the FileSaver.js library to save a JSON file to the user's local filesystem.

// Here's an updated version of the handleSubmit function that uses FileSaver.js:


import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const jsonData = JSON.stringify(formData);

    const file = new Blob([jsonData], { type: "application/json" });

    saveAs(file, "form-data.json");

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}


// In this updated version, we import the saveAs function from the file-saver library. When the form is submitted, we create a new Blob object with the JSON data and use the saveAs function to save the file to the user's local filesystem with the filename "form-data.json".

// I hope this updated version helps!




import React, {useState} from 'react';
import styles from '../../components/Create_Employee/Create_Employee.module.css';
import { saveAs } from "file-saver";

function Create_Employee () {
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    date_birth: "",
    salary: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const jsonData = JSON.stringify(formData);

    const file = new Blob([jsonData], { type: "text/plain;charset=utf-8" });

    saveAs(file, "new-employee-form-data.json");

    setFormData({ name: "", email: "", phone_number: "", date_birth: "", salary: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className= {styles.Container}>
      <button className = {styles.butEmp} onClick={()=>setClicked(!clicked)}>Add Employee</button>
      {clicked && <form className={styles.empForm} onSubmit={handleSubmit}>

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
      <input type="tel"
        id="phone_number"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
      ></input>

      <label htmlFor="phone_number">Date of birth:</label>
      <input type="date"
        id="date_birth"
        name="date_birth"
        value={formData.date_birth}
        onChange={handleChange}
      ></input>

      <label htmlFor="phone_number">Salary:</label>
      <input type="number"
        id="salary"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
      ></input>

      <button className = {styles.butEmp} type="submit">Submit</button>
      </form>}
    </div>
  );
}


//useEffect povuci sve sadasnje employee names