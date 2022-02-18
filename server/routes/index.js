import express from 'express';
import talk from './talk';

const route = express.Router();

route.use('/talks', talk);

export default route;
