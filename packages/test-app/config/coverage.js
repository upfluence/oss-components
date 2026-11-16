'use strict';

const path = require('path');

module.exports = {
  reporters: ['json', ['lcov', { projectRoot: path.resolve(__dirname, '../../..') }], 'html']
};
