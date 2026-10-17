import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const students= [
    {id:1, name : "Kamal", marks :75},
    { id:2, name : "Nimal" , marks :85},
    { id:3, name : "Sunil" , marks :90},
    {id:4, name : "Kumara" , marks :45},
    {id:5, name : "Saman" , marks :70},

  ]

function App() {
  const [count, setCount] = useState(0)
  const [showPassedOnly , setShowPassedOnly] =useState(false);

  const filteredStudents= setShowPassedOnly ?
  students.filter(student => student.marks >= 50) : students;


  return (
    <>
    <div>
      <h1>Student Management </h1>
      <p className='text-center'>Total Students</p>
      <div className="buttons">
        <button className={!showPassedOnly ? 'active' : ''} onClick={() => setShowPassedOnly(false)}>All Students</button>

        <button className={showPassedOnly ? 'active' : ''} onClick={() => setShowPassedOnly(true)}>Passed Students</button>
      </div>
      
    <div className= "student-list">
      {filteredStudents.map(student => (
        <div key={student.id} className="student-card">
          <h2>{student.name}</h2>
          <p>Marks: {student.marks}</p>
        </div>
      ))}
      
    </div>
      
    </>
  )
}

export default App
