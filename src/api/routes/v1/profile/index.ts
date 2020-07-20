import * as express from 'express';
import { error } from '../../../../utils/error';
import { ProfileController } from '../../../controller/ProfileController';
const router = express.Router();

router.get('/profile', ProfileController.getProfile,  error);
router.post('/profile', ProfileController.addProfile,  error);

export default router;
