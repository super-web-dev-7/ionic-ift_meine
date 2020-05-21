import {Router} from 'express';
import testRouter from './test.router';
import codeRouter from './code.router';
import dispenseRouter from './dispense.router';
import dailyRouter from './daily.router';

const router = Router();

router.use('/test', testRouter);
router.use('/code', codeRouter);
router.use('/dispense', dispenseRouter);
router.use('/daily', dailyRouter);

export default router;
