import { serverError, serverResponse } from '../helper/serverResponse';
import Attendee from '../database/models/attendee';

/**
 * @export
 * @class doctor
 */
class Attendees {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @returns {object} attendee creation
   */

  static async addAttendee(req, res) {
    try {
      const attendeeBody = req.body;

      const attendeeResult = await Attendee.createAttendee(attendeeBody);

      return serverResponse(req, res, 201, { data: attendeeResult });
    } catch (error) {
      console.log(error);
      return serverError(req, res, error);
    }
  }

  static async ListAttendees(req, res) {
    try {

      const allAttendees = await Attendee.listAttendee()

      return serverResponse(req, res, 200, { data: allAttendees });
    } catch (error) {
      return serverError(req, res, error);
    }
  }
}

export default Attendees;
