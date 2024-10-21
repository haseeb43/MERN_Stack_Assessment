const Post = require('../models/Post');


const createPost =  async (req, res) => {

    const {title, content, author} = req.body;
    try{

    const post = new Post({title, content, author});

    await post.save();
    res.status(200).json({message: 'Post created successfully', post});
} catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getPosts = async(req, res) => { 
    try{
 const posts = await Post.find();
 res.json(posts)
} catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

const getPostById = async (req, res) => {

    try{
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(400).json({message: 'Post not found'});

    res.json(post);

} catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

const updatePost =  async (req, res) => {

    try{
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(post);

} catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

const deletePost = async (req, res) => {

    try{
    await Post.findByIdAndDelete(req.params.id);
    res.json({message: 'Post deleted'});

} catch (err) {
    res.status(500).json({ message: 'Server error' });
  }

};

module.exports = {createPost, getPosts, getPostById, updatePost, deletePost};