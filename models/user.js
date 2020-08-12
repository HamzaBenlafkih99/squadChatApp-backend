const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic:{
    type:String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGp8riteaMvLm-zOpfrS_LfDl6z2fqGUaP7Is--zcG1GAzs6Jz&s"
  },
  followers:[{type:ObjectId,ref:"User"}],
  following:[{type:ObjectId,ref:"User"}]
})

mongoose.model("User", userSchema)
