import express from 'express';
import Attendees from '../controllers/conferenceAttendee';

const route = express.Router();

route.post('/add-attendee', Attendees.addAttendee);

export default route;