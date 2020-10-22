const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const posts = [
      {id: "hjgjyfff", title: "First Post", content: "This is First Post from Server."},
      {id: "hjgjhhjh", title: "Second Post", content: "This is Second Post from Server."},
    ];

    res.status(200).json({
      msg: "Posts fetched successfully.",
      posts: posts
    });
});

module.exports = router;
