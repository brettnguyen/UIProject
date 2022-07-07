import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { fetchData } from "../../main.js";
import { setCurrentUser } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext.js";

const Login = () => {
  const navigate = useNavigate();

  const {user, updateUser} = useContext(UserContext);

  const {username, password} = user;  

  const onChange = (e) => updateUser(e.target.name, e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/login", 
      {
       username,
       password
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        
        updateUser("authenticated", true)
        setCurrentUser(data);
        navigate("/Profile")
        //window.location.reload();
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
      <div >
       
  
        <h1 id='log' className="text-center display-1" >Login</h1>
        <form onSubmit={onSubmit}>
            <div className="container pt-3">
                <label htmlFor="username" className="user"> Username </label>
                <input type="text" className="form-control" id="username"  name='username' onChange={onChange}  value={username} placeholder="Enter Username" required ></input>
            </div>

            <div className="container pt-3">
        <label className='pass' htmlFor="password" >Password:</label>
        <input type="password" className="form-control" placeholder="Enter password" id="password" name='password' onChange={onChange} value={password}  required/>
        </div>
        <div className="container pt-3 text-center">
        <label id='rem' className="form-check-label"> Remember me  </label>
      <input className="form-check-input" type="checkbox"/>
    
   
  </div>

        <div className="container pt-3 text-center">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>

        </form>
   
      </div>
      </div>
      
    );
  }
  
  export default Login;