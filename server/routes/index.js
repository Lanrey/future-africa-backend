import express from 'express';
import talk from './talk';
import attendee from './attendee';

const route = express.Router();

route.use('/talks', talk);
route.use('/attendees', attendee);

export default route;
