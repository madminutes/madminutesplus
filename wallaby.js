module.exports = function () {
  return {
    files: [
      '*.js',
    ],

    tests: [
        'test/*.js'
    ],

    setup: function () {
    //   global.expect = require('mocha').expect;
    },

    testFramework: "jest",

    env: {
      type: 'node',
      runner: 'node'
    }
  };
};