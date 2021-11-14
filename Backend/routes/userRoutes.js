import express from 'express';
import { signUp, signIn, checkTokenValidation, updateUser} from '../controllers/userController';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/updateUser', updateUser);
router.get('/verifyToken/:token', checkTokenValidation);

export default router;