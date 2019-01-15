const request = require('request');

module.exports = function(url) {
  request(`https://${url}`, (err, res, body) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(body);
    }
  });
};