import {ADDSTUDENT} from './action.types.js'
export function AddStudent(newStudent){
  return({type:ADDSTUDENT,val:newStudent})
}