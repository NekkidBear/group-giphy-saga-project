const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const sqlText = `
    SELECT * FROM "favorites"
  `;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error in GET /favorites", error);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const sqlText = `
  INSERT INTO "favorites"
    ("category_id", "img_url
    ")
    VALUES(
      $1, $2
    )`;
  const sqlValues = (req.body.category_id, req.body.img_url);
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error adding favorite", error);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put("/:id", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/:id", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
