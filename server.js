const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// test API routes
app.get('/', (req, res) => res.send('API runing'));

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('reactjs/build'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `server started on port ${PORT} 🎉🎉🎉`);