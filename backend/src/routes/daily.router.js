import {Router} from 'express';

import * as dispenseController from '../controllers/dispense.controller';

const router = Router();

router.route('/:id')    
    .put(dispenseController.updateDaily)
        
export default router;
