const Home = require("../models/home");

exports.getForm = (req, res, next) => {
  res.render("inputForm", { pageTitle: "Input Form", currentPage: "get" });
};

exports.postForm = (req, res, next) => {
  const { name, email, contact } = req.body;
  const home = new Home(name, email, contact);
  home.save();
  res.render("outputForm", { pageTitle: "Output Form", currentPage: "post" });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((user) => {
    res.render("home", {
      user: user,
      pageTitle: "HomePage",
      currentPage: "home",
    });
  });
};
