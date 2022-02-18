import db from '../config/knex';
import { logger } from '../../helper';

/**
 * @class Attendee
 */
class Attendee {
  /**
   * @name create
   * @async
   * @static
   * @memberof Attendee
   * @param {Object} body object
   * @returns {object} created attendee
   */

  static async createAttendee(body) {
    try {
      return await db('conferenceAttendee').insert(body, this.getViewableColumnName());
    } catch (error) {
      logger.error(`${error} - ${error.message}`);
      return error.message;
    }
  }

  static getViewableColumnName() {
    return ['conference_attendee_id', 'attendee_name', 'attendee_email'];
  }
}

export default Attendee;
