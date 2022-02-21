import { serverError, serverResponse } from '../helper/serverResponse';
import Talk from '../database/models/talk';
import Attendee from '../database/models/attendee';

/**
 * @export
 * @class doctor
 */
class Talks {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @returns {object} talk creation
   */

  static async addTalk(req, res) {
    try {
      const talkBody = req.body;

      const talkResult = await Talk.createTalk(talkBody);

      return serverResponse(req, res, 201, { data: talkResult });
    } catch (error) {
      console.log(error);
      return serverError(req, res, error);
    }
  }

  /**
   *
   * @param {req} req
   * @param {res} res
   * @returns {object} add attendee
   */
  static async addAttendee(req, res) {
    try {

      // check if talk exists //

      const updateTalkBody = req.body;

      const doesTalkExist = await Talk.checkTalkExists(updateTalkBody);

      if (doesTalkExist === Number(0)) {
        return serverResponse(req, res, 409, {
          error: 'Talk does not exist'
        });
      }

      const updatedAttendee = await Attendee.createTalk(updateTalkBody);

      return serverResponse(req, res, 200, { data: "Attendee added successfully"});
      
    } catch (error) {
      return serverError(req, res, error);
    }
  }

  /**
   *
   * @param {req} req
   * @param {res} res
   * @returns {object} delete talk
   */
  static async deleteConferenceTalk(req, res) {
    try {

      const talkID = req.body;

      console.log(req.body);

      await Talk.deleteTalk(talkID.talkID);

      return serverResponse(req, res, 200, { data: "Talk deleted successfully"});
      
    } catch (error) {
      console.log(error);
      return serverError(req, res, error);
    }
  }

  static async ListTalks(req, res) {
    try {

      const allTalks = await Talk.listTalk()

        return serverResponse(req, res, 200, { data: allTalks });
    } catch (error) {
      return serverError(req, res, error);
    }
  }
}

export default Talks;
