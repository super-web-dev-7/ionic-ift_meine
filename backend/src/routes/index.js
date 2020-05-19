import {Router} from 'express';
import testRouter from './test.router';
import codeRouter from './code.router';
import dispenseRouter from './dispense.router';

const router = Router();

router.use('/test', testRouter);
router.use('/code', codeRouter);
router.use('/dispense', dispenseRouter);

export default router;
