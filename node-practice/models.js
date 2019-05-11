const mongoose = require('mongoose')

const postSchema = mongoose.Schema({ 
    title: String, 
    subtitle: String
  
  })
  
  const Post = mongoose.model('Post', postSchema) 
  
  module.exports = { 
      Post
  }