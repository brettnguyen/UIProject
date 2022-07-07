import React from 'react';
import Logo from "./usericon.svg";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { getCurrentUser } from "../../main.js";
import { fetchData } from "../../main.js";
import { useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import { useContext, Fragment } from "react";



const Profile = () => {
 
  const { user } = useContext(UserContext);
 
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


 
  const openEdit =  () => {
    var PItem = document.getElementById("L-item");
    var cbtn = document.getElementById("Change");
    var Deletebtn = document.getElementById("Dbtn");
    var Editbtn = document.getElementById("Ebtn");
    var Finishbtn = document.getElementById("Fbtn");

    if(getComputedStyle(cbtn).display === "none" )
    {
      cbtn.style.display = "block"
      PItem.style.display = "none"
      Deletebtn.style.display = "none"
      Editbtn.textContent = "Cancel"
      Finishbtn.style.display = "block"

    }
    else
    {
      cbtn.style.display = "none"
      PItem.style.display = "block"
      Deletebtn.style.display = "block"
      Finishbtn.style.display = "none"
      Editbtn.textContent = "Edit"
    }
  }
 

  const [postinfo, setPost] = useState({
    page: getCurrentUser()._id, 
    username: getCurrentUser().username, 
    post: ''
  
  });


  const {post, username, page} = postinfo;  

  const onChange = (e) => setPost({...postinfo, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();

   
    fetchData("/post/createPost", 
      {
        page,
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
          
           {/* change value to post id or something else that represents the page not the specific username */}
     
          <input id='post'name='post' onChange={onChange}   value={post} className='container'  placeholder='Write comment here'></input>
          <button type="submit"  className="btn btn-primary">Submit</button>
          <img className='P-user' src={Logo} alt=""/>
          
          
        </form>
        <ul id='list'  >
        
          {}
{posts.map(item => {

const onClick = (e) => {
  e.preventDefault();
  fetchData("/post/deletePost", 
  {
    id : item._id
    
  }, 
  "DELETE")
.then((data) => {
  if(!data.message) {
 
    console.log(data)
   
  }
})  
.catch((error) => {
  console.log(error)
})

}



const onEdit = (e) => {
  
  e.preventDefault();
  fetchData("/post/updatePost", 
  {
    id : item._id,
    post: document.getElementById("Change").value
  }, 
  "PUT")
.then((data) => {
  if(!data.message) {
 
    console.log(data)
   
  }
})  
.catch((error) => {
  console.log(error)
})

var PItem = document.getElementById("L-item");
var cbtn = document.getElementById("Change");
var Deletebtn = document.getElementById("Dbtn");
var Editbtn = document.getElementById("Ebtn");
var Finishbtn = document.getElementById("Fbtn");

cbtn.value = ""
cbtn.style.display = "none"
PItem.style.display = "block"
Deletebtn.style.display = "block"
Finishbtn.style.display = "none"
Editbtn.textContent = "Edit"

}


  if(item.page === getCurrentUser()._id)
  return (
              <div key={item._id} id='itemholder' className='container-fluid'>
                
            <li  className='listitem' >
              <label id='L-item'>{item.post} </label>
              <input id='Change' className='change' placeholder='Edit text'></input>
            </li>
            
            {item.username === user.username && <div id='btns' className="btn-group-vertical">
            <button  id='Fbtn' onClick={onEdit} className="btn btn-primary btn-sm">Finish</button>
            <button  id='Ebtn' onClick={openEdit} className="btn btn-primary btn-sm">Edit</button>
            <button  id='Dbtn' onClick={onClick} className="btn btn-danger btn-sm">Delete</button>

  </div>}
          
  
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