const express = require('express');
const router = express.Router();

const UserInfo = require('../models/UserInfo');

// @route GET api/get
// @desc Get ALL Items
// @access PUBLIC

router.get('/get', (req, res) => {
  UserInfo.find().then(userInfos => res.json(userInfos))
});

router.post('/post', (req, res) => {
  UserInfo.create({
    user_name: req.body.user_name, 
    user_email: req.body.user_email, 
    user_msg: req.body.user_msg
  }).then(userInfos => res.json(userInfos))
});

module.exports = router;
