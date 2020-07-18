import {Router} from 'express';

import * as reactionController from '../controllers/reaction.controller';

const router = Router();

router.route('/:id').put(reactionController.update);

export default router;
