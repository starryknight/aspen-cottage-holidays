const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = newSchema({
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


const CabinSchema = newSchema({
  limit: Number,
  address: String,
  city: String,
  state: String,
  Availability: Date,
  picture: String,
  smoking: Boolean,
  activities: [activitySchema]
});

const ActivitySchema = newSchema({
    name:String,
    requirements:String,
    availability: Date,
    location: String,
    age: Number
  });
