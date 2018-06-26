let express = require('express')
let router = express.Router()
const { UserModel } = require('../db/schema')

/* GET users listing. */

router.get('/', function (req, res) {
  UserModel.find().then((users) => {
    res.send({
      users
    })
  })
})

router.get('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  res.send({
    user
  })
})

router.post('/', (req, res) => {
  const newUser = new UserModel(req.body)
  newUser.save().then((user) => {
    res.send(user)
  })
})

module.exports = router