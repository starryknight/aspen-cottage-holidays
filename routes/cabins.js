let express = require("express");
let router = express.Router({ mergeParams: true });
const { UserModel, CabinModel } = require("../db/schema");
//show
router.get("/", function(req, res) {
  CabinModel.find().then(cabins => {
    res.send(cabins);
  });
});
//new
router.post("/new", function(req, res) {
  const newCabin = new CabinModel(req.body);

  UserModel.findById(req.params.userId)
    .then(user => {
      user.cabins.push(newCabin);
      return user.save();
    })
    .then(savedCabin => {
      res.send(newCabin);
    });
});
// limit: Number,
//   address: String,
//   city: String,
//   state: String,
//   Availability: Date,
//   picture: String,
//   smoking: Boolean,
//   activities: [ActivitySchema]
//update
router.patch("/:id", function(req, res) {
    const updatedCabin = req.body
    console.log(updatedCabin)
  const cabinId = req.params.id
  UserModel.findById(req.params.userId)
    .then(user => {
      const cabinToUpdate = user.cabins.id(cabinId);
      cabinToUpdate.limit = req.body.limit
      return user.save();
    })
    .then(() => {
      res.send(updatedCabin);
    });
});
//delete
router.delete('/:id',  function (req, res) {
   
    UserModel.findById(req.params.userId)
    
    .then((user) => {
  user.cabins.id(req.params.id).remove()
        return user.save()
    })
        .then((savedUser) => {
            res.send({user: savedUser})
                
        })
        .catch(err => console.log((err)))
})

module.exports = router;
