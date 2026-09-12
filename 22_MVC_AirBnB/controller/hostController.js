const Favourites = require("../models/favourties");
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

exports.bookings = (req, res, next) => {
  Favourites.getFavourites((favourites) => {
    Home.fetchAll((registerHome) => {
      const bookedHomes = registerHome.filter((home) => {
        return favourites.includes(home.id);
      });
      res.render("../views/store/booking.ejs", {
        bookedHomes: bookedHomes,
        pageTitle: "Bookings",
        currentPage: "booking",
      });
    });
  });
};

exports.myBookings = (req, res, next) => {
  Favourites.addToFavourite(req.body.id, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/bookings");
  });
};
