const router = require('express').Router()
const Item = require('../db/models/Item')



router.get('/', (req, res, next) => {
  try{
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
  }
  catch(err){
    next(err)
  }
})


// POST ROUTES || CREATE


router.post('/', (req, res, next) => {
  try {
    const newItem = new Item({
      name: req.body.name
    })
    newItem.save().then(item => res.json(item))
  }
  catch(err) {
    next(err)
  }
})




// PUT ROUTES || UPDATE
router.put('/:id', async (req, res, next) => {
  try {

  }
  catch (err) {
    next(err)
  }
})



// DELETE ROUTES || REMOVE
router.delete('/:id', (req, res, next) => {
  try {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false})) 
  }
  catch (err) {
    next(err)
  }
})


module.exports = router
