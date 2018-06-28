let express = require('express')
let router = express.Router({ mergeParams: true })
const { UserModel, CabinModel } = require('../db/schema')
//show
router.get('/', function (req, res) {
    CabinModel.find().then((cabins) => {
      res.send(cabins)
    })
  })
//new
router.post('/new', function (req, res) {

    const newCabin = new CabinModel(req.body)

  UserModel.findById(req.params.userId).then((user) => {
    user.cabins.push(newCabin)
    return user.save()
  }).then(savedCabin => {
    res.send({
      newCabin
    })
  })
})


router.patch('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.userId)

 
  const ideaId = req.params.id


  const cabinToEdit = user.cabins.id(ideaId)
  cabinToEdit.title = req.body.title
  cabinToEdit.description = req.body.description

  // save that to db
  const savedUser = await user.save()
  res.send({
    user: savedUser
  })
})


router.delete('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.userId)
  user.cabins.id(req.params.id).remove()
  const savedUser = await user.save()
  res.send({
    user: savedUser
  })
})


module.exports = router