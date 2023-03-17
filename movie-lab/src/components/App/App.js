import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../../pages/Main/Main';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}>
          </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
