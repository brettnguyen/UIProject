const Login = () => {
    return(
      <div>
        <h1 className="text-center display-1">Login Page</h1>
        <form>
            <div className="container pt-3">
                <label for="Username" className="form-label"> Username </label>
                <input type="username" className="form-control" id="Username" placeholder="Enter Username" ></input>
            </div>

            <div className="container pt-3">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
        </div>
        <div className="container pt-3">
        <label className="form-check-label"> Remember me
      <input className="form-check-input" type="checkbox"/>
      </label>
   
  </div>

        <div class="container pt-3">
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
        
        
      </div>

      
    );
  }
  
  export default Login;