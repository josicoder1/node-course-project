const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('6942e5f88a916c666e09fda5')
    .then(user => {
      if (!user) {
        return res.send('No user found');
      }

      // ✅ Store only JSON-safe data in session
      req.session.user = {
        _id: user._id.toString(),
        name: user.name,
        email: user.email
      };
      req.session.isLoggedIn = true;

      req.session.save(err => {
        if (err) console.log(err);
        res.redirect('/'); // or '/cart' if you want to go directly there
      });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};