let express = require('express')
let router = express.Router()
const { ActivitiesModel } = require('../db/schema')

/* GET users listing. */

router.get('/', function (req, res) {
  ActivitiesModel.find().then((activities) => {
    res.send(activities)
  })
})

router.get('/:id', async (req, res) => {
  const activity = await ActivitiesModel.findById(req.params.id)
  res.send(activity)
})
//creating the new activity
router.post('/', (req, res) => {
  const newActivity = new ActivitiesModel(req.body)
  newActivity.save().then((user) => {
    res.send(user)
  })
})

module.exports = router