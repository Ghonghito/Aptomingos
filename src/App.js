import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header'
import LandingPage from 'Pages/LandingPage'
import TheCode from 'components/TheCode'
import Footer from 'components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[url('assets/images/background.png')] bg-cover bg-no-repeat ">
      <div className='py-5'>
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/code' element={<TheCode />} />
        </Routes>
      </BrowserRouter>
      <div className='bg-black py-12 mt-12'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
