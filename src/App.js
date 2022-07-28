
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Update from './components/Update';
import 'boxicons'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/update/:userId' element={<Update />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
