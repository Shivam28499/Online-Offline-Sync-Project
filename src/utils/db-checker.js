const { Task } = require('../models');



async function isMySQLAvailable(simulateOffline) {
    if(simulateOffline) return false;
    try {
        await Task.sequelize.authenticate(); // User Online or Offline
        return true; //check for Online  return true if check for Offline return false
    } catch (error) {
        return false;
    }
}

// If any type of tool you can request offline please you use this 


// const isOnline = require("is-online");

// async function isMySQLAvailable () {
//   if (await isOnline()) {
//     return true;
//   } else {
//     return false;
//   }
// }  // Also we used it 


module.exports = { isMySQLAvailable };