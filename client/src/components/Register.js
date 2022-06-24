import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Register = () => {
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
        <form>
            <div className="container pt-3">
                <label for="Email" className="email"> Email address </label>
                <input type="email" className="form-control" id="Email" placeholder="Enter Email"></input>
            </div>

            <div className="container pt-3">
                <label for="Username" className="user"> Username </label>
                <input type="username" className="form-control" id="Username" placeholder="Enter Username" ></input>
            </div>

            <div className="container pt-3">
                <label for="pwd" className="pass">Create password:</label>
                <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
            </div>

            <div className="container pt-3">
                <label for="pwd" className="pass">Confirm password:</label>
                <input type="password" class="form-control" placeholder="Re-enter password" id="pwd"/>
            </div>
     
            <div class="container pt-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
      </div>
      </div>
    );
  }
  
  export default Register;