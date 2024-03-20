import React from 'react'

function Signup() {
  return (
  <div className='container'>
    <div  style={{marginLeft:"35%" , marginTop:"5%"}}>
    <h1 className=''>SignUp Form</h1>
  <div className='card shadow bg-dark text-light p-2' style={{ width: '25rem' }}>
    <form>
      <div className='row col-md-12'>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input type="text" className="form-control" id="firstName" name="Fname" aria-describedby="emailHelp" />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input type="text" className="form-control" id="lastName" name="Lname" aria-describedby="emailHelp" />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address:</label>
        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input type="password" className="form-control" name="password" id="password" />
      </div>
      <div className='col col-md-6'>
        <label htmlFor="loginAs">Sign up as:</label>
        <select name="dropdown" id="loginAs" style={{ borderRadius: '10px', padding: "5px" }}>
          <option value="employee">Employee</option>
          <option value="employer">Employer</option>
        </select>
      </div>
      <button type="submit" className="btn btn-outline-warning mt-4 justify-content-center">Sign up</button>
    </form>
  </div>
    </div>
  </div>

  )
}

export default Signup