import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import '../styles/line-chart-styles.css'
import { useDashboard } from '../hooks/useDashboard';


const LineChart = ({ selection }) => {
    const [chartData, setChartData] = useState([]);
    const [trendData, setTrendData] = useState([]);
    const [loading, setLoading] = useState(true);

    // const [chartData, setChartData] = useState({});
    const { fetchCoinInfo, coinInfo } = useDashboard();

    useEffect(() => {
        const fetchData = async () => {
            await fetchCoinInfo(selection);
        };

        fetchData();
    }, [selection]);

    useEffect(() => {
        try {
            if (coinInfo) {
                if (coinInfo.prices) {
                    const chartData = {
                        labels: coinInfo.prices.map(price => convertDate(price[0])),
                        datasets: [
                            {
                                label: `${selection} trend`,
                                data: coinInfo.prices.map(price => price[1]),
                                fill: false,
                                borderColor: 'rgb(52, 192, 75)',
                                tension: 0.2,
                            },
                        ],
                    };
                    setTrendData(chartData);
                    setLoading(false);
                } else {
                    console.log('No data found for the selected coin');
                    setLoading(true);
                }
            } 
        } catch (error) {
            console.log('Error fetching data', error);
        }
    }, [coinInfo]);

    // convert date from unix format

    const convertDate = (unixDate) => {
        const date = new Date(unixDate);
        const options = { month: 'short', day: '2-digit', year: 'numeric' };
        return date.toLocaleString('en-US', options);
    }


    return (
        <div className="line-chart">
            <h2 className="line-chart-heading">30 Day Trend</h2>

            {!loading ? (
                <Line data={trendData} />
            ) : (
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    )

}

export default LineChart;
