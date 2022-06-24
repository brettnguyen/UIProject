import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Login = () => {
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
        <form>
            <div className="container pt-3">
                <label for="Username" className="user"> Username </label>
                <input type="username" className="form-control" id="Username" placeholder="Enter Username" ></input>
            </div>

            <div className="container pt-3">
        <label className='pass' for="pwd">Password:</label>
        <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
        </div>
        <div className="container pt-3 text-center">
        <label id='rem' className="form-check-label"> Remember me  </label>
      <input className="form-check-input" type="checkbox"/>
    
   
  </div>

        <div className="container pt-3 text-center">
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>

        </form>
   
      </div>
      </div>
      
    );
  }
  
  export default Login;