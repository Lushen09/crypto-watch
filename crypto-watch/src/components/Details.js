
import { useState, useEffect } from 'react';
import '../styles/details-styles.css'; 

const Details = ( {selection} ) => {

    const [coinName, setCoinName] = useState();
    const [details, setDetails] = useState();
    const [marketCap, setMarketCap] = useState();
    const [rank, setRank] = useState();
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://crypto-watch-server.vercel.app/api/details/${selection}`);
            const data = await response.json();
            console.log('details', data.data.name);
            setCoinName(data.data.name);
            setMarketCap(data.data.market_data.market_cap.usd);
            setRank(data.data.market_data.market_cap_rank);
            setDetails(data.data.description.en);
        }

        fetchData();
    }, [selection]);

  return (
    <div className='details'>

        <div className='details-padding'>

            <div className='container text-light'>
                <h2>{coinName}</h2>
                <p>Rank: {rank}</p>
                <p>Market Cap: ${marketCap}</p>
                <p>{details}</p>
            </div>

        </div>


    </div>
  )
}

export default Details;