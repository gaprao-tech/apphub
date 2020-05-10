/**
 * Apps.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    ios: { type: 'string' },
    android: { type: 'string' },
    tag: { type: 'string' },
    rating: { type: 'number' },
    isFree: { type: 'boolean', defaultsTo: false },
  },

};

