import express from 'express';
import userController from './controllers/user';
import hobbyController from './controllers/hobby';

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:userid', userController.getAUser);
router.delete('/users/:userid', userController.deletAUser);

router.post('/hobby', hobbyController.createHobby);
router.put('/hobby/:id', hobbyController.editAHobby);
router.delete('/hobby/:id', hobbyController.deletAHobby);

export = router;
