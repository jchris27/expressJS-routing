const express = require('express');
const router = express.Router()
const path = require('path');

// define the 1st route. app route
// accepts regex
// ^ starts with
// $ ends with
// (.html)? makes it optional
router.get('^/$|/index(.html)?', (req, res) => {
  // serve a file
  // res.sendFile('./views/index.html', { root: __dirname })
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'));
});

// redirect page
router.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page.html'); //302 by default
});

module.exports = router;