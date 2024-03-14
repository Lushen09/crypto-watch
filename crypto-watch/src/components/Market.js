import React, { useState, useEffect } from 'react'
import "../styles/market-styles.css"
// import LineChart from './LineChart';
import { useUserContext } from '../hooks/useUserContext';
import { useTrack } from '../hooks/useTrack';
import { toast } from 'react-toastify';

const Market = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useUserContext();
  const { track, trackError, isLoading } = useTrack();

  const fetchData = () => {
    fetch(`http://localhost:3005/api/coins?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  useEffect(() => {
    fetchData();
  }, [currentPage])

  const changePage = (page) => {
    setCurrentPage(page);
  }

  // to listen for any error when tracking a coin
  useEffect(() => {
    if (trackError) {
      alert(trackError);
    }
  }, [trackError]);

  // Storing the coin id to track
  const trackCoin = async (coin) => {

    if (!user) {
      toast.success('You must be logged in to track coins', {
        position: 'bottom-center',
        theme: 'dark'
      });
      return;
    }

    console.log(user.currentUser.id, [coin]);
    const success = await track(user.currentUser.id, [coin]);

    if (success) {
      toast.success('Coin has been tracked', {
        position: 'bottom-center',
        theme: 'dark'
      });
    }
  }

  // Animation for the market section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('market-heading').offsetTop;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className="market" id='market'>

      <div className="container text-center">

        <div className="market-padding">

          <h2 id='market-heading' className={`market-heading ${isVisible ? 'animate-market' : ''} `}>Live Market</h2>

          <div class="table-responsive">
            <table class="table">
              <thead>

                <tr className="table-heading-row ">
                  <th scope="col"></th>
                  <th scope="col">Coin</th>
                  <th scope="col">Price ($)</th>
                  <th scope="col">24h change</th>
                  <th scope="col">Market Cap ($)</th>
                  <th scope="col">Last Update</th>
                  <th scope="col">30 day trend</th>
                </tr>

              </thead>

              <tbody class="table-group-divider">
                {data.map((data) => {
                  return (
                    <tr className="table-rows" key={data.id}>
                      <th scope="row"><img src={data.image} className='table-image'></img></th>
                      <td class='table-text'>{data.name}</td>
                      <td class='table-text'>{data.current_price.toFixed(2)}</td>
                      <td className={data.price_change_percentage_24h > 0 ? "green-text" : "red-text"}>{data.price_change_percentage_24h.toFixed(2)} %</td>
                      <td class='table-text'>{data.market_cap}</td>
                      <td class='table-text'>{data.last_updated.slice(0, 10)} {data.last_updated.slice(11, 19)}</td>
                      <td><button class="btn btn-success" onClick={() => trackCoin(data.id)}>Track</button></td>
                    </tr>
                  )
                })}
              </tbody>

            </table>
          </div>

          <div className="container text-center table-pagination">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" onClick={() => changePage(1)} class="btn btn-outline-success btn-lg">1</button>
              <button type="button" onClick={() => changePage(2)} class="btn btn-outline-success btn-lg">2</button>
              <button type="button" onClick={() => changePage(3)} class="btn btn-outline-success btn-lg">3</button>
              <button type="button" onClick={() => changePage(4)} class="btn btn-outline-success btn-lg">4</button>
              <button type="button" onClick={() => changePage(5)} class="btn btn-outline-success btn-lg">5</button>
            </div>
          </div>

        </div>



      </div>

    </div>
  )
}

export default Market