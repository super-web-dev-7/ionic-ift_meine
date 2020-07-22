import {Router} from 'express';

import * as codeController from '../controllers/code.controller';

const router = Router();

router.route('/')
    .get(codeController.checkCode)
    // .post(codeController.createCode);
router.route('/backup').get(codeController.backup_password)

export default router;
