import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header'
import LandingPage from 'Pages/LandingPage'
import TheCode from 'components/TheCode'
import Footer from 'components/Footer'
import Marketplace from 'Pages/Marketplace'
import DetailView from 'Pages/Marketplace/DetailView'

function App() {
  return (
    <div className="min-h-screen bg-[url('assets/images/background.png')] bg-cover bg-no-repeat ">
      <BrowserRouter>
        <div className='py-5'>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/code' element={<TheCode />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/marketplace/:id' element={<DetailView />} />
        </Routes>
      </BrowserRouter>
      <div className='bg-black py-12 mt-12  left-0 bottom-0 right-0'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
