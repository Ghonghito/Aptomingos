import Hero from 'components/Hero'
import Gallery from 'components/MingoGallery'
import Team from 'components/Team'
import Roadmap from 'components/Roadmap'
import Financials from 'components/Financials'

function App() {
  return (
    <div className="bg-[url('assets/images/background.png')] bg-cover bg-no-repeat ">
      <Hero />
      <Gallery />
      <Team />
      <Roadmap />
      <Financials />
    </div>
  );
}

export default App;
