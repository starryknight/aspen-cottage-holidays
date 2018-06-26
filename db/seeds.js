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
    picture: "https://i.pinimg.com/originals/a1/97/0b/a1970b0cb0e48c5f2654e9c44b08edc5.jpg",
    smoking: "true",
    activities: [fishing]
  });

  const stanley = new UserModel({
    userName: "stanley",
    password: "kimani",
    Arrival: 07/12/2018,
    picture: "https://www.gannett-cdn.com/-mm-/acfef7d74e1e9805d997dc1aa942ae1f2b4e34b9/c=25-0-299-365&r=537&c=0-0-534-712/local/-/media/2016/02/10/USATODAY/USATODAY/635907076024739362-Kim.0001.jpg",
    cabins: [regalMary]
  });

  UserModel.remove({})
  .then(() => stanley.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())
