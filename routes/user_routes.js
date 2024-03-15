const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.post('/new-user', userController.createUser);
router.get('/', userController.getListUsers);
router.get('/:id', userController.getById);
router.patch('/:id', userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;