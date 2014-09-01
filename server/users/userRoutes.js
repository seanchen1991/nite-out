var userController = require('./userController.js');

module.exports = function(app) {

  app.route('/')
    .get(userController.loginUser)
    .put(userController.editUser)
    .post(userController.signupUser);

};