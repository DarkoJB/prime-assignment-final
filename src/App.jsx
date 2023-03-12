import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employees from './pages/Employees/Employees';
import Tasks from './pages/Tasks/Tasks';
import Home from './pages/Home/Home';

function App() {
  useEffect(()=>{
    !localStorage.getItem('tasksArray') && localStorage.setItem('tasksArray', JSON.stringify([]));
    !localStorage.getItem('employeesArray') && localStorage.setItem('employeesArray', JSON.stringify([]));
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/employees" element={<Employees />} />
            <Route path="/tasks" element={<Tasks />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
