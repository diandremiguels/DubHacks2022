const router = require('express').Router();
let Plant = require('../plant.model');

router.route('/:sustainability/:difficulty/:state/:space/:lighting').get((req, res) => {
  const params = [];
  count = 0;
  if(sustinability !== "any"){
    params[count] = sustainability;
    count+= 1;
  }
  if(difficulty !== "any"){
    params[count] = sustainability;
    count+= 1;
  }
  if(state !== "any"){
    params[count] = sustainability;
    count+= 1;
  }
  if(space !== "any"){
    params[count] = sustainability;
    count+= 1;
  }
  if(lighting !== "any"){
    params[count] = sustainability;
    count+= 1;
  }
  Plant.find()
    .then(plants => res.json(plants))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:name').get((req, res) => {
  Plant.find({name:req.params.name})
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:name').post((req, res) => {
  Resource.findOne({name:req.params.name})
    .then(plant => {
      plant.users = req.body.name;
      resources.save()
        .then(() => res.json('Plant updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
