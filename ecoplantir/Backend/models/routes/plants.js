const router = require('express').Router();
let Plant = require('../plant.model');

router.route('/:sustainability/:difficulty/:state/:space/:lighting').get((req, res) => {
  Plant.find()
    .then(plants => res.json(plants))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:name').get((req, res) => {
  Plant.find({name:req.params.name})
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
