let express = require('express')
let router = express.Router()
const { UserModel } = require('../db/schema')

/* GET users listing. */

router.get('/', function (req, res) {
  UserModel.find().then((users) => {
    res.send(users)
  })
})
//once you select user get id and send user
router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  res.send(user)
})
//creating the new user
router.post('/', (req, res) => {
  const newUser = new UserModel(req.body)
  newUser.save().then((user) => {
    res.send(user)
  })
})
//delete
router.delete('/:id',  function (req, res) {
   
  UserModel.findById(req.params.userId)
  
  .then((user) => {
user.id(req.params.id).remove()
      return user.save()
  })
      .then((savedUser) => {
          res.send({user: savedUser})
              
      })
      .catch(err => console.log((err)))
})

module.exports = router