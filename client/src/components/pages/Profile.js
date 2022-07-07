import React from 'react';
import Logo from "./usericon.svg";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { getCurrentUser } from "../../main.js";
import { fetchData } from "../../main.js";
import { useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import { useContext } from "react";



const Profile = () => {
  
  const [activeIndex, setActiveIndex] = useState();


  
    
  const { user } = useContext(UserContext);
 
  const [posts, setPosts] = useState([]);
  //https://a-comment.herokuapp.com
  
  useEffect(() => {
      fetch("https://a-comment.herokuapp.com/post/showPosts", )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
      
          setPosts(data);
   
     
      });
      
  })
 

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
          <button type="submit" id='sub'  className="btn btn-primary">Submit</button>
          <img className='P-user' src={Logo} alt=""/>
          
          
        </form>
        <ul id='list'  >
        
          {}
{posts.map((item) => {

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
if (activeIndex) {
  setActiveIndex(null);
} else {
  setActiveIndex(item._id);
}

var cbtn = document.getElementById("Change");


cbtn.value = ""


}


 
 
  

  if(item.page === getCurrentUser()._id)
  {
  
  return (
              <div key={item._id} id='itemholder' className='container-fluid'>
                  
                  
   
 

            <li  className='listitem' >
            {activeIndex === item._id ? 

              <input id='Change' className='change'  placeholder='Edit text'></input>
            
              :
              <label >{item.post} </label>
            }
            </li>
            
            {item.username === user.username && <div id='btns'  className="btn-group-vertical">
            {activeIndex === item._id ? 
            <div className="btn-group-vertical">
            <button id='Fbtn' onClick={onEdit}  className="btn btn-primary btn-sm ">Finish
            </button>
            <button  id='Ebtn'  onClick={() => {
              if (activeIndex != null) {
                setActiveIndex(null);
                
              } else {
                setActiveIndex(item._id);
              }
            }} className="btn btn-primary btn-sm toggle-btn ">Cancel</button>
        
            </div>

            :
            <div className="btn-group-vertical">
            <button  id='Ebtn'  onClick={() => {
              if (activeIndex!= null) {
                setActiveIndex(null);
                setActiveIndex(item._id);
              } else {
                setActiveIndex(item._id);
              }
            }} className="btn btn-primary btn-sm toggle-btn ">Edit</button>
            <button  id='Dbtn' onClick={onClick} className="btn btn-danger btn-sm">Delete</button>
            </div>
            
            }
            

          </div>}
            <img className='OP-user' src={Logo} alt=""/>       
            </div>
           
          )}
          else
          {
            return null
          }
        }

          )}
          
          
        </ul>
      
         </div>
      </div>

    );
  }
  
  export default Profile;