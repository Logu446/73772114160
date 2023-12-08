import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <br /><br />
      <table>
        <thead>
          <tr>
            <th colSpan="2">
              <br /><br />Student Profile<br /><br />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td className="area">LOGESHWARAN C K</td>
          </tr>
          <tr>
            <td>Register Number</td>
            <td className="area">73772114160</td>
          </tr>
          <tr>
            <td>Department</td>
            <td className="area">Computer Science and Engineering</td>
          </tr>
          <tr>
            <td>Year</td>
            <td className="area">Third Year</td>
          </tr>
          <tr>
            <td>Area of Interest</td>
            <td className="area">JAVA Development and Web Development</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
