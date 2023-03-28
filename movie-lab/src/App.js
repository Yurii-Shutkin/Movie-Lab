import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Home from './pages/Home/Home';
import './App.scss';
// import { server } from './server';

function App() {
  const [result, setResult] = useState([]);

  return (
      <div>
        <Header result={setResult}/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='home' element={<Home findedMovies={result} />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        {/* {console.log(result)} */}
      </div>
  );
}

export default App;
