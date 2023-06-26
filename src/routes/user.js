const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/index');
const { authMiddleware, authIsAdmin } = require('../middleware');

router.post('/',userController.postUser);
router.get('/:id', authMiddleware, authIsAdmin, userController.getUser);
router.put('/:id',authMiddleware, authIsAdmin, userController.putUser);
router.get('/',authMiddleware, authIsAdmin, userController.getUsers);


module.exports = router;