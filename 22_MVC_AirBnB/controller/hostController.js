const Home = require("../models/homes");

exports.getHomePage = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("../views/home/home-page.ejs", {
      registerHome: registerHome,
      pageTitle: "HomePage",
      currentPage: "home",
    });
  });
};
