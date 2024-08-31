import React, { Component, useEffect, useState } from 'react'
import { listEmployees, deleteEmployeeById } from '../services/EmployeeService'
import { useNavigate, useParams} from 'react-router-dom'

function EmployeeList (){
 
    
     const [employees , setEmployees] = useState([])


     const {id} = useParams();

     const navigator = useNavigate();
      
     useEffect(() => {

        getAllEmployees();
      
     } , [])

     function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);

        }).catch(error => {
           console.log(error); 
        })

     }

     function addEmployee() {
           navigator('/addEmployee');
     }


     function updateEmployee (empId){
        navigator(`/editEmployee/${empId}`)
        // {the above is not a single quote since we need the id dynamically}
       
     }

     
      function deleteEmployee (id){
         console.log('Deleting employee', id)
         if(id){
            deleteEmployeeById(id).then((response) => {
                console.log('Deleting ' , response.data);

                getAllEmployees();
              }).catch(error => {
                  console.error(error);
              });

         }

        //  navigator(`/editEmployee/${id}`)
      }
    
    
    return (
      <div className='container'>
          <h2 className='text-center fw-bold'> List of Employees</h2>

          <button type="button" className="btn btn-success mb-2" onClick={addEmployee}>Add Employee</button>

           <table className='table table-primary table-striped table-bordered text-align display: flex'>
            <thead> 
                <tr>
                    <th> Employee Id</th>
                    <th> Employee First Name</th>
                    <th> Employee Last Name</th>
                    <th> Employee Email</th>
                    <th> Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => 
                    <tr key= {employee.empId}>
                        <td> {employee.empId}</td>
                        <td> {employee.firstName}</td>
                        <td> {employee.lastName}</td>
                        <td> {employee.email}</td>
                        <td> 
                        <button type="button" className="btn btn-info me-2" onClick={() => updateEmployee(employee.empId)}>Update</button>
                        <button type="button" className="btn btn-danger" onClick={() => deleteEmployee(employee.empId)}>Delete</button>
                        </td>
                    </tr>)
                }
                
            </tbody>
           </table>
      </div>
    )
  
}

export default EmployeeList
