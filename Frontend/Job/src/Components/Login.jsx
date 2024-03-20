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
                <label for="exampleInput1" className="form-label">First Name:</label>
                <input type="text" className="form-control" id="exampleInput1" placeholder='First Name' required/>
              </div>
              <div className='col-md-6'>
                <label for="exampleInput2" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleInput2" placeholder='Last Name'  required/>
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleEmail" placeholder='abc@gmail.com' required/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='********' required/>
            </div>
            <button type="submit" className="btn btn-outline-warning mt-2 justify-content-center">Login</button>
          </form>
        </div>
        </div>
      </div>
    </div>

    
  )
}

export default Login