import {Router} from 'express';

import * as dispenseController from '../controllers/dispense.controller';

const router = Router();

router.route('/:id')    
    .put(dispenseController.updateDaily)
    .get(dispenseController.getDaily)
        
export default router;
