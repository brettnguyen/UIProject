const Register = () => {
    return(
      <div>
        <h1 className="text-center display-1">Register Page</h1>
        <form>
            <div className="container pt-3">
                <label for="Email" className="form-label"> Email address </label>
                <input type="email" className="form-control" id="Email" placeholder="Enter Email"></input>
            </div>

            <div className="container pt-3">
                <label for="Username" className="form-label"> Username </label>
                <input type="username" className="form-control" id="Username" placeholder="Enter Username" ></input>
            </div>

            <div className="container pt-3">
                <label for="pwd">Create password:</label>
                <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
            </div>

            <div className="container pt-3">
                <label for="pwd">Confirm password:</label>
                <input type="password" class="form-control" placeholder="Re-enter password" id="pwd"/>
            </div>
     
            <div class="container pt-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
      </div>
    );
  }
  
  export default Register;