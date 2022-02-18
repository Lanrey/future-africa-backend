import express from 'express';
import Talks from '../controllers/conferenceTalk';

const route = express.Router();

route.post('/add-talk', Talks.addTalk);

export default route