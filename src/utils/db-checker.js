const { Task } = require('../models');

async function isMySQLAvailable() {
    try {
        await Task.sequelize.authenticate();
        return false;
    } catch (error) {
        return false;
    }
}

module.exports = { isMySQLAvailable };