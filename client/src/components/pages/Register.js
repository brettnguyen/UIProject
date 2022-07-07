import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { fetchData } from "../../main.js";

import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../main.js";

import { useContext } from "react";
import UserContext from "../../context/userContext.js";
const Register = () => {

  const navigate = useNavigate();

  const {user, updateUser} = useContext(UserContext);

  const {username, password, password2} = user;  

  const onChange = (e) => updateUser(e.target.name, e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/register", 
      {
       username,
       password,
       password2
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        updateUser("authenticated", true)
        setCurrentUser(data);
        navigate("/Profile")
      }
    })  
    .catch((error) => {
      console.log(error)
    })

  }
    return(
        <div   className='container-fluid'>
      <Player
   className='mh-100'
      autoplay={false}
      loop = {false}
      src="https://assets8.lottiefiles.com/packages/lf20_nzypsmyf.json" resizeMode="cover"
      style={{ position: 'absolute', zIndex: '-1', left: '0', right:'0' }}
    >
      <Controls visible={false}  />
        
         </Player>
      <div>
        <h1 id='Register' className="text-center display-1">Register</h1>
        <form onSubmit={onSubmit}>
            <div className="container pt-3">
                <label htmlFor="username" className="user"> Username </label>
                <input type="text" className="form-control" id="username"  name='username' onChange={onChange}  value={username}  placeholder="Enter Username"  required ></input>
            </div>

            <div className="container pt-3">
                <label htmlFor="password" className="pass">Create password:</label>
                <input type="password" className="form-control" placeholder="Enter password"  id="password" name='password' onChange={onChange} value={password}  required />
            </div>

            <div className="container pt-3">
                <label htmlFor="password2" className="pass2">Confirm password:</label>
                <input type="password" className="form-control" placeholder="Re-enter password" id="password2" name='password2' onChange={onChange} value={password2} required />
            </div>
     
            <div className="container pt-3">
                <button type="submit" className="btn btn-primary" value="Register">Submit</button>
            </div>
        </form>
      </div>
      </div>
    );
  }
  
  export default Register;