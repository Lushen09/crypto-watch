import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import '../styles/dashboard-styles.css'; // Import your dashboard styles
import { useUserContext } from '../hooks/useUserContext';
import { useDashboard } from '../hooks/useDashboard';
import LineChart from '../components/LineChart';
import Details from '../components/Details';
import { toast } from 'react-toastify';

const Dashboard = () => {

  const { user } = useUserContext();
  const [userName, setUserName] = useState('');
  const [selectedCryptos, setSelectedCryptos] = useState([]);
  const [chartID, setChartID] = useState('');
  const [buttonClick, setButtonClick] = useState(false);

  const { selectedCoins, fetchSelectedCoins } = useDashboard();

  // Fetch selected cryptocurrencies from the database
  useEffect(() => {
    const getUserCoins = async () => {
      if (user) {
        const id = user.currentUser.id
        await fetchSelectedCoins(id);
      }
    }
    getUserCoins();

  }, [user]);

  useEffect(() => {
    if (user) {
      setUserName(user.currentUser.name);
    }

    if (selectedCoins) {
      if (selectedCoins.trackedCoins) {
        setSelectedCryptos(selectedCoins);
      }
    }
  }, [selectedCoins]);

  // Render details of a selected crypto
  const renderCryptoDetails = (crypto) => {

    // render line chart based on user selection
    console.log('component', crypto);
    setChartID(crypto);
    setButtonClick(true);



  };

  // Untrack a coin
  const untrackCoin = async (coin, id) => {
    console.log('untrack', coin, id);
    const response = await fetch(`https://crypto-watch-server.vercel.app/api/untrack/${coin}?id=${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const updatedCryptos = selectedCryptos.trackedCoins.filter(crypto => crypto !== coin);
      setSelectedCryptos(prevState => ({ // using functional update to avoid stale state
        ...prevState,
        trackedCoins: updatedCryptos
      }));
      toast.success('Coin untracked', {
        position: 'bottom-center',
        theme: 'dark'
      });
    }
  };

  return (
    <div className="dashboard">
      {user ?
        <div>
          <div className="container">
            <h1 className="dashboard-heading">Welcome to your dashboard, <span className='hero-gradient'>{userName}</span> </h1>
            <div className="selected-cryptos">
              {selectedCryptos.trackedCoins ? (
                selectedCryptos.trackedCoins.map((crypto, index) => (
                  <div key={index} className="crypto-card">
                    <p>{crypto}</p>
                    <div className='d-flex flex-column mb-3'>
                      <button class="btn btn-success" onClick={() => renderCryptoDetails(crypto)}>View Details</button>
                      <button class="btn btn-danger" onClick={() => untrackCoin(crypto, selectedCryptos._id)}>Untrack</button>
                    </div>

                  </div>
                ))
              ) : (
                <div className='dashboard-text text-center'>
                  <p>No cryptocurrencies selected.</p>
                  <Link to="/market">Go to Market</Link>
                </div>
              )}
            </div>

            {buttonClick && <Details selection={chartID} />}


            <div className="crypto-details">
              {/* Render details of selected crypto here */}
              {buttonClick && <LineChart selection={chartID} />}

            </div>
          </div>
        </div>

        :
        <div className='text-center text-light'>
          <h1 className="dashboard-heading">You need to be logged in to view this page</h1>
          <p>Please navigate to the login or signup pages from the navigation bar.</p>
        </div>
      }


    </div>
  );
};

export default Dashboard;

