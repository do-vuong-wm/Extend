const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({

  user_name: {
    type: String,
    required: true,
    default: 'John Doe'
  },
  user_email: {
    type: String,
    required: true,
    default: 'JohnDoe@extend.com'
  },
  user_msg:{
    type: String,
    required: true,
    default: 'Hello, Im interested in the project'
  },
  user_phone:{
    type: Number,
    required: false
  },
  date:{
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model('UserInfo', UserInfoSchema);
