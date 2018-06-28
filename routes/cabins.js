let express = require('express')
let router = express.Router({ mergeParams: true })
const { UserModel, CabinModel } = require('../db/schema')

/* Create new Idea listing. */
router.post('/new', function (req, res) {

  UserModel.findById(req.params.userId).then((cabin) => {
    const newCabin = new CabinModel(req.body)
    user.cabins.push(newCabin)
    return cabin.save()
  }).then(savedCabin => {
    res.send({
      cabin: savedCabin
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