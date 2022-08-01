
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Update from './components/Update';
import SalaryChart from './components/SalaryChart';
import 'boxicons';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} ></Route>
        <Route path='/chart' element={<SalaryChart />} ></Route>
        <Route path='/addUser' element={<CreateUser />} ></Route>
        <Route path='/update/:userId' element={<Update />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
