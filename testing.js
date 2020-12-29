// Quick and dirty script for debugging QuickLogs.

const quicklogs = require('./quicklogs.js');

quicklogs.log('Log message');
quicklogs.debug('Debug message');
quicklogs.success('Success message');
quicklogs.warning('Warning message');
quicklogs.error('Error message');
quicklogs.fatal('Fatal error message');