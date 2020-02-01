const User = require("../models/userModel");
let lastId = 0;

module.exports = class UsersController {



  getAll() {
    return new Promise((resolve, reject) => {
      User.find((err, users) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(users.map(u => u.toObject()))
        }
      })
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
        User.findOne({
          id: id
        }, (err, user) => {
          if (err) {
            reject(err);
          }
          else {
            console.log(user);
            resolve(user);
          }
        });
    });
  }

  create(user) {

    return new Promise((resolve, reject) => {
      User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }, (err, user) => { 
        if (err) {
          reject(err);
        }
        else {
          resolve(user)
        }
    });
  });
}

  delete(id) {
    return new Promise((resolve, reject) => {
      users = user.find().filter((u) => !(u.id === id));
      resolve(true);
    });
  }
}
