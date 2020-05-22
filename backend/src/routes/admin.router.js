import {Router} from 'express';

import * as adminController from '../controllers/admin.controller';

const router = Router();

// router.route('/:id')    
//     .put(dispenseController.updateDaily)
//     .get(dispenseController.getDaily)
        
router.route('/dashboard').get(adminController.getDashboard);
router.route('/alldispenses').get(adminController.getAllDispenses);
router.route('/allcodes/:type').get(adminController.getAllCodes);
router.route('/createCode').post(adminController.createCode);
export default router;
