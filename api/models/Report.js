/**
* Report.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    
    reportId : { stype: 'integer', primaryKey:true, autoIncrement: true },

    user : { type: 'integer', required:true, model:'User' },

    startDate : { type: 'datetime', required: true },

    endDate : { type: 'datetime', required: true },

    magazines : { type: 'integer' },

    tractsAndBrochures : { type: 'integer' },

    bibleStudies : { type: 'integer' },

    returnVisits : { type: 'integer' },

    books : { type: 'integer' }
  }
};

