import db from '../config/knex';
import { logger } from '../../helper';

/**
 * @class Talk
 */
class Talk {
  /**
   * @name create
   * @async
   * @static
   * @memberof Talk
   * @param {Object} body object
   * @returns {object} created conference talk
   */

  static async createTalk(body) {
    try {
      return await db('conferenceTalk').insert(body, this.getViewableColumnName());
    } catch (error) {
      logger.error(`${error} - ${error.message}`);
      return error.message;
    }
  }

  static getViewableColumnName() {
    return ['conference_talk_id', 'talk_name', 'talk_duration', 'talk_speaker'];
  }
}

export default Talk;
