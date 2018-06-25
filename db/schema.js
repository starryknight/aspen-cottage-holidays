const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String
  },
  password: {
    type: String
  },
  Arrival: Date,
  picture: String,
  cabins: [cabinSchema]
});

const CabinSchema = new Schema({
  limit: Number,
  address: String,
  city: String,
  state: String,
  Availability: Date,
  picture: String,
  smoking: Boolean,
  activities: [activitySchema]
});

const ActivitySchema = new Schema({
    name:String,
    requirements:String,
    availability: Date,
    location: String,
    age: Number
  });

  const UserModel = mongoose.model('User', UserSchema)
  const CabinModel = mongoose.model('Cabin', CabinSchema)
  const ActivityModel = mongoose.model('Activity', ActivitySchema)

  module.exports = {
    UserModel,
    CabinModel,
    ActivityModel
  }