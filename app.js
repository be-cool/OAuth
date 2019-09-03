const express = require('express')
const authRoutes = require('./views/routes/auth-routes');
const passportSetup = require('./views/config/passport-setup');

const app = express();

// set a view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})