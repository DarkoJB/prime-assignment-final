import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Home.module.css';
const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <h1 className={styles.title}><NavLink to={"/"}>Prime Software Assignment</NavLink></h1>
        <nav className={styles.homeContainer}>
          <ul className={styles.nav}>
            <li><NavLink to={"/employees"}>Employees</NavLink></li>
            <li><NavLink to={"/tasks"}>Tasks</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className={styles.outlet}>
        <Outlet/>
      </div>
      <div className={styles.tableContainer}>
        <h2 className={styles.title}>Top Five Employees</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Assignments</th>
            </tr>
          </thead>
          <tr>
            <td>1</td>
            <td>Darko Bozic</td>
            <td>15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Miljan Miljanovic</td>
            <td>12</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lazar Lazarevic</td>
            <td>10</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Petar Petrovic</td>
            <td>9</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Djordje Djordjevic</td>
            <td>6</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Home;