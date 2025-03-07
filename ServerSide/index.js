// const express = require('express');
// const app = express();
// const cors = require('cors');
// const blogs = require('./api/blogsData.json');
// const port = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// const cors = require("cors");
// app.use(cors({ origin: "*" })); // Allow all origins


// // Routes
// app.get('/', (req, res) => {
//     res.send("Blog server is running!");
// });

// app.get('/blogs', (req, res) => {
//     res.send(blogs);
// });

// app.get('/blogs/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const blog = blogs.find(b => b.id === id); // Use `.find()` to get a single blog
//     if (!blog) {
//         return res.status(404).send({ error: "Blog not found" }); // Improved error handling
//     }
//     res.send(blog);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const cors = require('cors');
const app = express();
const blogs = require('./api/blogsData.json'); // Ensure this file exists
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" })); // Allow all origins
app.use(express.json()); // Allows JSON body parsing

// Routes
app.get('/', (req, res) => {
    res.send("Blog server is running!");
});

app.get('/blogs', (req, res) => {
    console.log("Sending blogs data:", blogs); // Log to check if data is loaded
    res.json(blogs); // Use `.json()` to ensure correct format
});

app.get('/blogs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find(b => b.id === id);
    if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
});

// Start the server
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
