const express = require("express");
const Post = require('../models/post'); //accesses functions in user model file
const router = express.Router();

router

.get('/showPosts', async (req, res) => {
    try {
      const posted = await Post.showPosts(req.body.post, req.body.username);
      res.send(posted);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  .post('/createPost', async (req, res) => {
    try {
      const post = await Post.createPost(req.body.post, req.body.username, req.body.page);
      res.send({...post, post: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })


  .delete('/deletePost', async (req, res) => {
    try {
      await Post.deletePost(req.body.id);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/dPosts', async (req, res) => {
    try {
      await Post.dPosts(req.body.post);
      res.send({ success: "Posts deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/updatePost', async (req, res) => {
    try {
      const post = await Post.updatePost(req.body.id, req.body.post);
      res.send({...post, post: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;