
const express = require('express')
const router = express.Router()

router.get('/:name', function (req, res) {
  res.render('users', {
    name: req.params.name,
    html: '<h1>kooo</h1>',
    supplies: ['mop', 'broom', 'duster']
  })
})

module.exports = router
