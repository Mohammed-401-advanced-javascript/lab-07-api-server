/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

module.exports = (err, req, res, next) => {
  const error = {
    'text': 'Server craaashed!',
    'error': err,
  };
  res.status(500).json(error);
};