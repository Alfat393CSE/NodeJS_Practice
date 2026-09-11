const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");

module.exports = class Home {
  constructor(name, email, contact) {
    this.name = name;
    this.email = email;
    this.contact = contact;
  }
  save() {
    Home.fetchAll((user) => {
      user.push(this);
      const filePath = path.join(rootDir, "data", "user.json");
      fs.writeFile(filePath, JSON.stringify(user), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    const filePath = path.join(rootDir, "data", "user.json");
    fs.readFile(filePath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
};
