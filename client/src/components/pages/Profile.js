import React from 'react';
import Logo from "./usericon.svg";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { getCurrentUser } from "../../main.js";
import { fetchData } from "../../main.js";
import { useEffect, useState } from "react";



const Profile = () => {
 
 
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
      fetch("http://localhost:5000/post/showPosts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
      
          setPosts(data);
   
     
      });
      
  })
  
  let user = getCurrentUser();

  const [postinfo, setPost] = useState({
    username: getCurrentUser().username, 
    post: ''
  
  });

  const {post, username} = postinfo;  

  const onChange = (e) => setPost({...postinfo, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();

   
    fetchData("/post/createPost", 
      {
      username,
      post
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
     
        console.log(data)
       // window.location.reload();
      }
    })  
    .catch((error) => {
      console.log(error)
    })
    postinfo.post = ""
  }
    return(
      <div   className='container-fluid'>
      <Player
   className='test'
      autoplay={false}
      loop = {false}
      src="https://assets8.lottiefiles.com/packages/lf20_nzypsmyf.json" resizeMode="cover"
      style={{ position: 'absolute', zIndex: '-1', left: '0', right:'0' }} >
      <Controls visible={false}  />
      
         </Player>
        
      <div  className="text-center" >
        <img className='userimage' src={Logo} alt=""/>
        <div>
        <label  className="form-label "> {user.username} </label>
        </div>
        <div>
        <label  className="form-label"> Bio </label>
        </div>
        <div id='bar'  >
        </div>
        <form  onSubmit={onSubmit} className='post' >
        <input className='user-input'  id='username' name='username' onChange={onChange}  value={username}  ></input>
          <input id='post'name='post' onChange={onChange}   value={post} className='container'  placeholder='Write comment here'></input>
          <button type="submit"  className="btn btn-primary">Submit</button>
          <img className='P-user' src={Logo} alt=""/>
          
          
        </form>
     
        <ul id='list'  >
        
          {}
{posts.map(item => {
  if(item.username === user.username)
            return(
              <div key={item._id} id='itemholder' className='container-fluid'>
                
            <li className='listitem' >
              {item.post} 
              
            </li>
            <div id='btns' className="btn-group-vertical">
            <button  id='Ebtn' className="btn btn-primary btn-sm">Edit</button>
            <button  id='Dbtn' className="btn btn-danger btn-sm">Delete</button>
            
            </div>
            <img className='OP-user' src={Logo} alt=""/>
          
            </div>
           
          )}
          )}
          
          
        </ul>
      
         </div>
      </div>

    );
  }
  
  export default Profile;