import React from 'react';
import Logo from "./usericon.svg";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Profile = () => {
    return(
      <div   className='container-fluid'>
      <Player
   className='mh-100'
      autoplay={false}
      loop = {false}
      src="https://assets8.lottiefiles.com/packages/lf20_nzypsmyf.json" resizeMode="cover"
      style={{ position: 'absolute', zIndex: '-1', left: '0', right:'0' }} >
      <Controls visible={false}  />
         </Player>
         
      <div className="text-center" >
        <img className='userimage' src={Logo} alt=""/>
        <div>
        <label  className="form-label "> Username </label>
        </div>
        <div>
        <label  className="form-label"> Bio </label>
        </div>
        <div id='bar'  >
        </div>
        <div className='post' >
        
          <input id='postinfo' className='container' placeholder='Write comment here'></input>
          <img className='P-user' src={Logo} alt=""/>
        </div>
      </div>
      </div>
    );
  }
  
  export default Profile;