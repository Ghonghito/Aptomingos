import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header'
import LandingPage from 'Pages/LandingPage'
import TheCode from 'components/TheCode'
import Footer from 'components/Footer'
import Marketplace from 'Pages/Marketplace'
import DetailView from 'Pages/Marketplace/DetailView'
import Wallet from 'Pages/Wallet'

function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[url('assets/images/background.png')] bg-cover bg-no-repeat ">
      <BrowserRouter>
        <div className='py-5'>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/code' element={<TheCode />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/marketplace/:id' element={<DetailView />} />
          <Route path='/marketplace/wallet' element={<Wallet />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
