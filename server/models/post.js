
const mongoose = require("mongoose");
//const userid = require('./user')

const postSchema = new mongoose.Schema({

 // id: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  
  username:  {type:String },
  post:  {type:String },
  page:  {type:String }
})

const Post = mongoose.model("Post", postSchema);

async function createPost( post, username, page) {
    const newPost = await Post.create({
      username: username,
     post: post,
     page: page
    });
    return newPost;
  }

  async function showPosts() {
    const post = await Post.find();
   return post;
 }



  async function dPosts(post) {
    return await Post.deleteMany({"post": post});
 }

 async function deletePost(id) {
  return await Post.deleteOne({"_id": id});
}


 async function updatePost(id, post) {
  const user = await Post.updateOne({"_id": id}, {$set: { post: post}});
  return user;
}

  module.exports = { 
    createPost, showPosts, dPosts, updatePost, deletePost
  };

