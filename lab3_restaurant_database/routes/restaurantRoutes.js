const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");


// 4. Return ALL restaurant details
router.get("/", async (req, res) => {
    try {
        const sortBy = req.query.sortBy;

        if (sortBy) {
            const order = sortBy === "DESC" ? -1 : 1;

            const restaurants = await Restaurant.find(
                {},
                { _id: 1, cuisine: 1, name: 1, city: "$address.city", restaurant_id: 1 }
            ).sort({ restaurant_id: order });

            return res.json(restaurants);
        }

        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 5. Return restaurants by cuisine
router.get("/cuisine/:cuisine", async (req, res) => {
    try {
        const cuisine = req.params.cuisine;

        const restaurants = await Restaurant.find({ cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// 7. Delicatessen cuisine AND city NOT Brooklyn
router.get("/Delicatessen", async (req, res) => {
    try {
        const restaurants = await Restaurant.find(
            {
                cuisine: "Delicatessen",
                borough: { $ne: "Brooklyn" }
            },
            {
                _id: 0,
                cuisine: 1,
                name: 1,
                borough: 1
            }
        ).sort({ name: 1 });

        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
