const router = require('express').Router();
const { User } = require("../../models");

// Create a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });
        const {id} = userData.get({ plain: true});
        req.session.save(() => {
          req.session.user_id = id;
          req.session.logged_in = true;
    
          res.status(200).redirect("/");
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

// When a user logs in, find that user by username, confirm password, and redirect to the homepage
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
  const validPassword = await userData.checkPassword(req.body.password);
   if (!validPassword) {
    res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
    return;
  }
  
  const {id} = userData.get({ plain: true });
  req.session.save(() => {
    req.session.user_id = id;
    req.session.logged_in = true;
    
    res.status(200).redirect("/");
    
  });
} catch (err) {
  res.status(400).json(err);
}
});

// Delete the user session when user logs out 
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;