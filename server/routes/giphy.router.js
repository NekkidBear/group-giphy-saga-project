const express = require('express');
const dotenv =require('dotenv').config()
const axios = require('axios')

//configure API key for GIPHY queries
const GIPHY_API_KEY = process.env.GIPHY_API_KEY

const router = express.Router();

//GET /api/giphy
router.get('/', (req, res)=>{
    axios({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&&limit=5&&rating=g`
    })
    .then((response) =>{
        const GIFsFromGiphy = response.data;
        res.send(GIFsFromGiphy)
    })
    .catch((error) => {
        console.log('GET /api/giphy failed', error)
        res.sendStatus(500);
    })
})

