const express = require('express');

const { getAllCoins, getCoin, getCoinDetails, getCoinInfo, storeTrackedCoins, untrackCoin,  signupUser, loginUser } = require('../controllers/controller');

const router = express.Router();

// Get all coins
router.get('/coins', getAllCoins);

// get selected coins
router.get('/coins/:id', getCoin);

// get chart data for selected coin
router.get('/coin/:id', getCoinDetails);

// get detailed information for a specific coin
router.get('/details/:coin', getCoinInfo);

// store user's tracked coins
router.post('/track', storeTrackedCoins);

// untrack a specific coin
router.delete('/untrack/:coin', untrackCoin);

// signup user
router.post('/signup', signupUser);

// login user
router.post('/login', loginUser);

module.exports = router;