import express from 'express';
import talk from './talk';
import attendee from './attendee';
import chatRoom from './chatRoom'

const route = express.Router();

route.use('/talks', talk);
route.use('/attendees', attendee);
route.use('/chatRoom', chatRoom);

export default route;
