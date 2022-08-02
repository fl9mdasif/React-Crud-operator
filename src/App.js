
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Update from './components/Update';
import SalaryChart from './components/SalaryChart';
import 'boxicons';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import NotFound from './components/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} ></Route>
        <Route path='/addUser' element={<CreateUser />} ></Route>
        <Route path='/dashboard' element={<SalaryChart />} ></Route>
        <Route path='/update/:userId' element={<Update />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
