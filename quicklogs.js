// QuickLogs
// 2020 Liam Hogan
// https://www.npmjs.com/package/quicklogs

const colors = require('colors');

exports.log = function (input) {
    console.log('[  LOG  ] '.bold + input);
}

exports.debug = function (input) {
    console.log('[ DEBUG ] '.bold.magenta + input);
}

exports.success = function (input) {
    console.log('[SUCCESS] '.bold.green + input);
}

exports.warning = function (input) {
    console.log('[WARNING] '.bold.yellow + input);
}

exports.error = function (input) {
    console.log('[ ERROR ] '.bold.red + input);
}

exports.fatal = function (input) {
    console.log('[ FATAL ] '.bold.red + input.underline.red);
}