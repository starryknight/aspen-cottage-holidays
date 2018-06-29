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
    picture: "https://www.gannett-cdn.com/-mm-/acfef7d74e1e9805d997dc1aa942ae1f2b4e34b9/c=25-0-299-365&r=537&c=0-0-534-712/local/-/media/2016/02/10/USATODAY/USATODAY/635907076024739362-Kim.0001.jpg",
    cabins: [regalMary, elcasa]
  });

  UserModel.remove({})
  .then(() => stanley.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())
