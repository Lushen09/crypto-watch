import { useState } from "react";

export const useDashboard = () => {
    // function to retreive selected coins from the database and render them in the dashboard
    const [selectedCoins, setSelectedCoins] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [coinInfo, setCoinInfo] = useState([]);

    const fetchSelectedCoins = async (id) => {
        setFetchError(null);

        try {
            const response = await fetch(`http://localhost:3005/api/coins/${id}`);
            const data = await response.json();
            setSelectedCoins(data.tracker);
            
        } catch (error) {
            setFetchError('Error fetching selected coins ' + error.message);
        }
    };

    // retrieve additional info about one selected coin
    const fetchCoinInfo = async (coinId) => {
        try {
            const response = await fetch(`http://localhost:3005/api/coin/${coinId}`);
            const data = await response.json();
            setCoinInfo(data.data);
        }
        catch (error) {
            console.log('Error fetching data', error);
        }
    };

    return { selectedCoins, fetchSelectedCoins, fetchCoinInfo, fetchError, coinInfo };
}