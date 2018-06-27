let express = require('express')
let router = express.Router({ mergeParams: true })
const { UserModel, CabinModel } = require('../db/schema')

/* Create new Idea listing. */
router.post('/', function (req, res) {

  UserModel.findById(req.params.userId).then((user) => {
    const newIdea = new CabinModel(req.body)
    user.ideas.push(newIdea)
    return user.save()
  }).then(savedUser => {
    res.send({
      user: savedUser
    })
  })
})

/* Delete an Idea */
// router.delete('/:id', (req, res) => {
//   UserModel.findById(req.params.userId).then((user) => {
//     user.ideas.id(req.params.id).remove()
//     return user.save()
//   }).then(savedUser => {
//     res.send({
//       user: savedUser
//     })
//   })
// })
router.patch('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.userId)

  // get id of the idea
  const ideaId = req.params.id

  // edit the idea from the id
  const ideaToEdit = user.ideas.id(ideaId)
  ideaToEdit.title = req.body.title
  ideaToEdit.description = req.body.description

  // save that to db
  const savedUser = await user.save()
  res.send({
    user: savedUser
  })
})


router.delete('/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.userId)
  user.ideas.id(req.params.id).remove()
  const savedUser = await user.save()
  res.send({
    user: savedUser
  })
})


module.exports = router