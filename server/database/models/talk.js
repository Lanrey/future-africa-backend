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

  /**
   * @name checkTalkExists
   * @async
   * @static
   * @memberof Talk
   * @param {Object} body object
   * @returns {object} existing talk
   */

  static async checkTalkExists(body) {
    try {

      const checkedTalk = await db('conferenceTalk').count().where('conference_talk_id', body.talk_id).first();
      return checkedTalk.count;
      
    } catch (error) {
      logger.error(`${error} - ${error.message}`);
      return error.message;
    }
  }


   /**
   * @name deleteTalk
   * @async
   * @static
   * @memberof Talk
   * @param {Object} body object
   * @returns {object} delete talk
   */

  static async deleteTalk(id) {
    try {

      const deletedTalk =  await db('conferenceTalk').where('conference_talk_id', id).del();
      console.log(deletedTalk);
    } catch (error) {
      console.log(error);
      logger.error(`${error} - ${error.message}`);
      return error.message;
    }
  }

  static getViewableColumnName() {
    return ['conference_talk_id', 'talk_name', 'talk_duration', 'talk_speaker'];
  }
}

export default Talk;
