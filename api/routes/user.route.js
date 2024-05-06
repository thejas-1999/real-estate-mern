import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/user/test",test);

export default router;
