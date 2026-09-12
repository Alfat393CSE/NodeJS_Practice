const Home = require("../models/homes");

exports.getForm = (req, res, next) => {
  res.render("../views/store/inputForm", {
    pageTitle: "Add Homes",
    currentPage: "inputForm",
  });
};

exports.getFormOutput = (req, res, next) => {
  const { houseName, price, image, rating } = req.body;
  const home = new Home(houseName, price, image, rating);
  home.save();
  
  res.render("../views/store/outputForm", {
    pageTitle: "Add Homes",
    currentPage: "outputForm",
  });
};
