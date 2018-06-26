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


module.exports = router