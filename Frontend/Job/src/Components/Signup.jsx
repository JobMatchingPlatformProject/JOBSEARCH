import React from 'react'

function Signup() {
  return (
  <div className='container'>
    <div  style={{marginLeft:"35%" , marginTop:"5%"}}>
    <h1 className=''>SignUp Form</h1>
  <div className='card shadow bg-dark text-light p-2' style={{ width: '25rem' }}>
    <form action='/login'>
      <div className='row col-md-12'>
        <div className="col-md-6">
          <label for="firstName" className="form-label">First Name:</label>
          <input type="text" className="form-control" id="firstName" placeholder='First Name' name="Fname" required />
        </div>
        <div className="col-md-6">
          <label for="lastName" className="form-label">Last Name:</label>
          <input type="text" className="form-control" id="lastName" placeholder='Last Name' name="Lname" required />
        </div>
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Email address:</label>
        <input type="email" className="form-control" id="email" placeholder='abc@gmail.com' name="email" required />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password:</label>
        <input type="password" className="form-control" name="password" id="password" placeholder='********' required/>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Confirm Password:</label>
        <input type="password" className="form-control" name="confirmpassword" id="password" placeholder='********' required/>
      </div>
      <div className='col col-md-6'>
        <label for="loginAs">Sign up as:</label>
        <select name="dropdown" id="loginAs" style={{ borderRadius: '10px', padding: "5px" }} required> 
          <option value="employee">Employee</option>
          <option value="employer">Employer</option>
        </select>
      </div>
      <button type="submit" className="btn btn-outline-warning mt-4 justify-content-center">Register</button>
    </form>
  </div>
    </div>
  </div>

  )
}

export default Signup