const express = require('express');
const app = express();
const cors = require('cors');
const blogs = require('./api/blogsData.json');
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Blog server is running!");
});

app.get('/blogs', (req, res) => {
    res.send(blogs);
});

app.get('/blogs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find(b => b.id === id); // Use `.find()` to get a single blog
    if (!blog) {
        return res.status(404).send({ error: "Blog not found" }); // Improved error handling
    }
    res.send(blog);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
