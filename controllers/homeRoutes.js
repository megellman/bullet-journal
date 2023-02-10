const router = require("express").Router();

// Login 
router.get('/', (req, res) => {
    // If user has already logged in, then redirect to dashboard
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;