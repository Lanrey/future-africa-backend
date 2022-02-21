import express from 'express';
import Talks from '../controllers/conferenceTalk';

const route = express.Router();

route.post('/add-talk', Talks.addTalk);
route.put('/add-attendee', Talks.addAttendee);
route.delete('/delete-talk', Talks.deleteConferenceTalk)
route.get('/list-talk', Talks.ListTalks);
export default route;
