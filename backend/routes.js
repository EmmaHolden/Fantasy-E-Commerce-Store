const express = require('express')
const router = express.Router()
const itemsController = require('./controllers')

router.get('/items', itemsController.getStockItems)
router.get('/item/:id', itemsController.getStockItem)
router.patch('/item/:id', itemsController.editStockItem)

module.exports = router