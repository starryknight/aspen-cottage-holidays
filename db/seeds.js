require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const { UserModel, CabinModel, ActivityModel } = require('./schema')

const fishing = new ActivityModel({
    name:"trout fishing",
    requirements:"Fishing License",
    availability: 07/12/2018,
    location: "185 Spring road",
    age: 18
  });

  const regalMary = new CabinModel({
    limit: "8",
    address: "135 spring road",
    city: "Demopolis",
    state: "Colorado",
    Availability: 07/12/2018,
    picture: "https://cdn.liverez.com/5/11100/1/57087/250/1.jpg",
    smoking: "true",
    activities: [fishing]
  });
  const elcasa = new CabinModel({
    limit: "6",
    address: "340 Major road",
    city: "Riverbank",
    state: "Georgia",
    Availability: 07/13/2018,
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Elwood_Cabin_Rio_Grande_Forest_Colorado_September_2013.JPG/250px-Elwood_Cabin_Rio_Grande_Forest_Colorado_September_2013.JPG",
    smoking: "false",
    activities: [fishing]
  });

  const stanley = new UserModel({
    userName: "stanley",
    password: "kimani",
    Arrival: 07/12/2018,
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kim_Jong-un_at_the_Workers%27_Party_of_Korea_main_building.png/220px-Kim_Jong-un_at_the_Workers%27_Party_of_Korea_main_building.png",
    cabins: [regalMary, elcasa]
  });

  UserModel.remove({})
  .then(() => stanley.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())
