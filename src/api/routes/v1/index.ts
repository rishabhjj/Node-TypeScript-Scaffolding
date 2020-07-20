import * as express from 'express';
import profile from './profile';

const router = express.Router();
router.use('/', profile);

export default router;
