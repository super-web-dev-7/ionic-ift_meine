import {Router} from 'express';

import * as codeController from '../controllers/code.controller';

const router = Router();

router.route('/')
    .get(codeController.checkCode)
    .post(codeController.createCode);

export default router;
