import React, { Component, useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'

function EmployeeList (){
 
    
     const [employees , setEmployees] = useState([])
      
     useEffect(() => {

        listEmployees().then((response) => {
            setEmployees(response.data);

        }).catch(error => {
           console.log(error); 
        })
     } , [])
    
    return (
      <div className='container'>
          <h2 className='text-center fw-bold'> List of Employees</h2>
           <table className='table table-primary table-striped table-bordered text-align display: flex'>
            <thead> 
                <tr>
                    <th> Employee Id</th>
                    <th> Employee First Name</th>
                    <th> Employee Last Name</th>
                    <th> Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => 
                    <tr key= {employee.empId}>
                        <td> {employee.empId}</td>
                        <td> {employee.firstName}</td>
                        <td> {employee.lastName}</td>
                        <td> {employee.email}</td>
                    </tr>)
                }
                
            </tbody>
           </table>
      </div>
    )
  
}

export default EmployeeList
