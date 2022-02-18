import { serverError, serverResponse  } from "../helper/serverResponse";
import Talk from '../database/models/talk';


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

  static async addTalk (req, res) {
    try {

      const talkBody = req.body

      const talkResult = await Talk.createTalk(talkBody);

      return serverResponse(req, res, 201, { data: talkResult });
      
    } catch (error) {
      return serverError(req, res, error);
    }
  }

}

export default Talks