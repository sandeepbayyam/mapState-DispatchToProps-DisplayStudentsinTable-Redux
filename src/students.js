import React from 'react';
import './style.css'
import {connect} from 'react-redux';
import {AddStudent} from './store/students.actions.js'
 
const Students = (props)=>{
  console.log(props)
  const [newStudent,setNewStudent]=React.useState({})
  const handlefirstname =(e)=>{
    setNewStudent({...newStudent,firstname:e.target.value
   })}
   const handleLastname = (e)=>{
     setNewStudent({...newStudent,lastname:e.target.value})
   }
   const handleCity = (e)=>{
    setNewStudent({...newStudent,city:e.target.value})
  }
  const handleAge = (e)=>{
    setNewStudent({...newStudent,age:e.target.value})
  };
  return(
    <div>
        FirstName:<input type='text' placeholder='EnterFirstName' onChange={handlefirstname} />
        <hr/>
        LastName:<input type='text' placeholder='EnterLastName' onChange={handleLastname} />
        <hr/>
        City:<input type='text' placeholder='EnterCityName' onChange={handleCity} />
        <hr/>
        Age:<input type='text' placeholder='EnterAge'  onChange={handleAge}/>
        <hr/>
        <button onClick={
          ()=>{
            props.addstudent(newStudent)
          }
        }>Add Student</button>
      <h4>Student Details</h4>
      <table border='2'>
        <thead>
          <th>FirstName</th>
          <th>LastName</th>
          <th>City</th>
          <th>Age</th>
        </thead>
      {
        props.students.map((s,i)=>{
          return(
            <>
            <tr key={i}>
              <td>{s.firstname}</td>
              <td>{s.lastname}</td>
              <td>{s.city}</td>
              <td>{s.age}</td>
            </tr>
            </>
          )
        })
      }
      </table>
      </div>
  )
}
function mapStateToProps(state){
  return state;
}
function mapDispatchToProps(dispatch){
  return (
    {
      addstudent:(newStudent)=>{
        return(dispatch(AddStudent(newStudent)))
      }
    }
  )
}
export default connect(mapStateToProps,mapDispatchToProps) (Students);