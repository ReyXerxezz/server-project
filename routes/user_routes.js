const express = require('express');
const multer = require('multer');
const router = express.Router();
const userController = require('../controllers/user')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/users");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({storage});

router.post('/new-user', upload.single("avatar"), userController.createUser);
router.get('/', userController.getListUsers);
router.get('/:id', userController.getById);
router.patch('/:id', userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;