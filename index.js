// QuickLogs
// 2021 Liam Hogan
// https://www.npmjs.com/package/@crapintosh/quicklogs

const colors = require('colors');

class QuickLogs {
    static log(input) {
        console.log('[  LOG  ] '.bold + input);
    }
    
    static debug(input) {
        console.log('[ DEBUG ] '.bold.magenta + input);
    }
    
    static success(input) {
        console.log('[SUCCESS] '.bold.green + input);
    }
    
    static warning(input) {
        console.log('[WARNING] '.bold.yellow + input);
    }
    
    static error(input) {
        console.log('[ ERROR ] '.bold.red + input);
    }
    
    static fatal(input) {
        console.log('[ FATAL ] '.bold.red + input.underline.red);
    }
}

module.exports = QuickLogs;
