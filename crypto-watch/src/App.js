import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Market from './components/Market';
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from './pages/SignUp';
import ScrollToTop from "./components/ScrollToTop";
import "./styles/index.css"
import Dashboard from './pages/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">

      <Nav />
      <ToastContainer />
      <ScrollToTop />
      <Routes>

        <Route index path="/" element={<Home />} />
        <Route path="market" element={<Market />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App;
