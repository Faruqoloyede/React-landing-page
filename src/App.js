import Community from './component/Community';
import Explore from './component/Explore';
import Hero from './component/Hero';
import Navbar from './component/Navbar';



function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Explore />
      <Community />
    </div>
  );
}

export default App;
