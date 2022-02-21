import express from 'express';
import Attendees from '../controllers/conferenceAttendee';

const route = express.Router();

route.post('/add-attendee', Attendees.addAttendee);
route.get('/list-attendee', Attendees.ListAttendees);

export default route;