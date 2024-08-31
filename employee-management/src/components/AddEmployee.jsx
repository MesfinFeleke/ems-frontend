import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";

function AddEmployee() {

  const {id} = useParams();

  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          console.log('form data:', response.data);

          // Assuming response.data contains the fields `firstName`, `lastName`, `email`
          setFormData({
            firstName: response.data.firstName || '',
            lastName: response.data.lastName || '',
            email: response.data.email || '',
          });
        })
        .catch((error) => {
          console.error('Error fetching employee data:', error);
        });
    }
  }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
     if(id){
        updateEmployee(id, formData).then((response) => {
            console.log(response.data);
            navigator("/employees");
          }).catch(error => {
            console.error(error);
        })
          
     }else{
        createEmployee(formData).then((response) => {
        console.log(response.data);
        navigator("/employees");
      }).catch(error => {
          console.error(error);
      });

     }
  };


  function pageTitle() {

    if (id) {
        return   <h2 className="mb-4 text-center">Update Employee</h2>
    } else {
        return   <h2 className="mb-4 text-center">Add New Employee</h2>
    }

  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "100%", maxWidth: "400px" }}>
        {/* <h2 className="mb-4 text-center">Add Employee</h2> */}
        {
            pageTitle()
        }
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
