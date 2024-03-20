import React from 'react'

function Login() {
  return (
    <div>
      <div className='container'>
        <div style={{marginLeft: '35%'}}>
        <h1 className=''>Login Form</h1>
        <div className='card shadow bg-dark text-light p-2' style={{ width: '25rem' }}>
          <form>
            <div className='row col-md-12'>
              <div className='col-md-6'>
                <label htmlFor="exampleInputEmail1" className="form-label">First Name:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className='col-md-6'>
                <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-outline-warning mt-2 justify-content-center">Sign up</button>
          </form>
        </div>
        </div>
      </div>
    </div>

    
  )
}

export default Login