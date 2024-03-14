const axios = require('axios');
const User = require('../models/User');
const Tracker = require('../models/Tracker');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' });

}


// Get all coins
const getAllCoins = (req, res) => {

    const { page = 1, limit = 10 } = req.query;

    axios.get(` https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=${page}&sparkline=false&x_cg_demo_api_key=${process.env.API_KEY}`)
        .then((response) => {
            const { data } = response;
            res.json({
                data,
                currentPage: parseInt(page),
                totalPages: Math.ceil(data.length / limit),
                totalItems: data.length
            });

        })
        .catch(error => {
            res.status(500).json({ message: "Server Error" });
        });
}

// Get selected coins for specific user
const getCoin = async (req, res) => {
    const { id }  = req.params;

    try {
        const tracker = await Tracker.findOne({ userID: id });

        if (!tracker) {
            return res.status(404).json({ error: "User not found" });
        }

        const coins = tracker.trackedCoins;

        if (coins.length === 0) {
            return res.status(404).json({ error: "No tracked coins" });
        }

        console.log('server ',  tracker);
        res.status(200).json({ tracker });
    } catch (error) {
        console.log(error);
    }
}

// Get chart data on selected coin
const getCoinDetails = async (req, res) => {
    const  {id}  = req.params;
    console.log('server', id);
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily&x_cg_demo_api_key=${process.env.API_KEY}`);
        const data = response.data;

        res.status(200).json({ data });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get details of a specific coin
const getCoinInfo = async (req, res) => {
    const { coin } = req.params;

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=${process.env.API_KEY}`);
        const data = response.data;

        res.status(200).json({ data });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// store user's tracked coins
const storeTrackedCoins = async (req, res) => {
    const { userID, trackCoins } = req.body;

    try {
        const tracker = await Tracker.findOne({ userID });

        if (!tracker) {
            return res.status(404).json({ error: "User not found" });
        }

        console.log('user found');

        if (tracker.trackedCoins.length + trackCoins.length > 4) {
            return res.status(400).json({ error: "Maximum of 4 coins can be tracked" });
        }

        console.log('coins not more than 4');

        let alreadyTracked = false;

        trackCoins.forEach(coin => {
            if (tracker.trackedCoins.includes(coin)) {
                alreadyTracked = true;
                res.status(400).json({ error: `${coin} is already tracked` });
                return;
            }

            console.log('coin not already tracked');
        });

        if (alreadyTracked) return;

        tracker.trackedCoins.push(...trackCoins);
        await tracker.save();

        console.log('coins tracked successfully');

        res.status(201).json({ message: "Coin tracked successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(server, 'error');
    }
}

// untrack a specific coin
const untrackCoin = async (req, res) => {
    const { coin } = req.params;
    const { id } = req.query; 

    try {
        const tracker = await Tracker.findById(id);

        if (!tracker) {
            return res.status(404).json({ error: "Tracker not found" });
        }

        tracker.trackedCoins.pull(coin);

        await tracker.save();

        res.status(200).json({ message: "Coin untracked successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// sign up user 
const signupUser = async (req, res) => {
    const { email, password, name } = req.body;

    try {

        const user = await User.signup(email, password, name);

        const token = createToken(user._id);
        const currentUser = {
            id: user._id,
            name: user.name
        };

        const tracker = await Tracker.create({ userID: user._id });
        console.log(tracker);

        res.status(201).json({ currentUser, token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await User.login(email, password);

        const currentUser = {
            id: user._id,
            name: user.name
        };

        const token = createToken(user._id);

        res.status(201).json({ currentUser, token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

module.exports = { getAllCoins, storeTrackedCoins, getCoin, getCoinInfo, untrackCoin,  signupUser, loginUser, getCoinDetails }