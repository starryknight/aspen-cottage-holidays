let express = require("express");
let router = express.Router({ mergeParams: true });
const { UserModel, CabinModel } = require("../db/schema");

//show all
router.get("/", function(req, res) {
  CabinModel.find().then(cabins => {
    res.send(cabins);
  });
});

//show one/// needs the helps
router.get("/:id", (req, res) => {
    UserModel.findById(req.params.userId)
    .then(users => {
        const cabin = users.userId.cabins.id(req.params.id)
        res.send(cabin)
      })
      .catch(err => console.log((err)))
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

//update
router.patch("/:id/edit", function(req, res) {
    const updatedCabin = req.body
    console.log(updatedCabin)
  const cabinId = req.params.id
  UserModel.findById(req.params.userId)
    .then(user => {
      const cabinToUpdate = user.cabins.id(cabinId);
      cabinToUpdate.limit = req.body.limit
      cabinToUpdate.address = req.body.address
      cabinToUpdate.city = req.body.city
      cabinToUpdate.state = req.body.state
      cabinToUpdate.Availability = req.body.Availability
      cabinToUpdate.picture = req.body.picture
      cabinToUpdate.smoking = req.body.smoking
      
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
