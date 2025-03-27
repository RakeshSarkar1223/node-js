const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, 'public');

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(publicPath));

// Home route
app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

// Profile route
app.get('/profile', (req, res) => {
    const user = {
        name: 'Rakesh Sarkar',
        city: 'Kolkata',
        country: 'India',
        email: 'rakeshitju28@gmail.com'
    };
    res.render('profile', { user });
});

// 404 route
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error("This port has an issue.");
        process.exit(1); // Exit the process if there's an error
    } else {
        console.log(`Server is running on port ${port}`);
    }
});