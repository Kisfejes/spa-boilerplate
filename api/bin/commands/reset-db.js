const inquirer = require('inquirer');

const { initDB, closeDB } = require('../../db/db');

async function resetDatabase() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to drop all tables?'
      }
    ]);

    if (answers.confirm) {
      await initDB({ force: true });
      console.log('Database has been reset!');
    } else {
      console.log('Cancelled database reset.');
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    await closeDB();
  }
}

module.exports = {
  command: 'reset-db',
  aliases: 'rd',
  describe: 'Reset database',
  handler: resetDatabase
};
