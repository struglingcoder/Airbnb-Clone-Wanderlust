const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");



// Route to handle filters
router.get('/listings/filter', async (req, res) => {
    const queryParam = req.query.q;
  
    try {
      const filteredListings = await Listing.find({ category: queryParam });
      res.render('yourEJSTemplate', { allListings: filteredListings });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });