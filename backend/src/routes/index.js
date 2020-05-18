import {Router} from 'express';
import testRouter from './test.router';
import codeRouter from './code.router';

const router = Router();

router.use('/test', testRouter);
router.use('/code', codeRouter);

export default router;
