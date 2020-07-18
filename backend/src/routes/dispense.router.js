import {Router} from 'express';

import * as dispenseController from '../controllers/dispense.controller';

const router = Router();

router.route('/')
    .get(dispenseController.getByDeviceId)
    .put(dispenseController.update)
    .post(dispenseController.create);

router.route('/:id').put(dispenseController.cancel);
        
export default router;
