const yargs = require('yargs');

yargs // eslint-disable-line
  .usage('Usage: npm run cli:{env} <command> [options]')
  .command(require('./commands/reset-db'))
  .demandCommand(1)
  .strict()
  .help()
  .epilog('Project Manager CLI 2017')
  .argv;
