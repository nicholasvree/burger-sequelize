var db = require("../models");



module.exports = function(app) {
// get route -> index
  app.get("/", function(req, res) {
    res.redirect("/burgers");
  });

  app.get("/burgers", function(req, res) {

    console.log(db)
    // express callback response by calling burger.selectAllBurger
      db.burger.findAll({}).then(function(results) {
        // We have access to the todos as an argument inside of the callback function
        // res.json(results);
        var hbsObject = { burgers: results };
        res.render("index", hbsObject);
      });
  });

  // post route -> back to index
  app.post("/burgers/create", function(req, res) {
      db.burger.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      // We have access to the new todo as an argument inside of the callback function
    console.log(results);
    res.redirect("/");
    }); 
  });

  // put route -> back to index
  app.put("/burgers/update", function(req, res) {
    db.burger.update({
      devoured: 1
    }, {
      where: {
        id: req.body.burger_id
      }
    }).then(function(results) {
      console.log(results);
      res.redirect("/");
    });
    
  });

}
