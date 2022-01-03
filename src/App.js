import logo from './logo.svg';
import './App.css';
import BoosterCard from './components/BoosterCard';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Overlay from './components/Overlay';
function App() {
  return (
    <div className="App">
      <Overlay />
      <Header/>
      <SideBar/>

      <div className='main-content'>
        <BoosterCard mmr="5600 MMR" img="https://www.earlygame.com/uploads/images/meepo-guide-fan-art.jpg" booster_name="krane" booster_description="I have played dota2 for a long while, and i gathered the information needed to boost you to the next level"></BoosterCard>    
        <BoosterCard mmr="0 MMR" booster_name="Become a booster" booster_description="First 3 boosters have their place for free for 2 weeks" img="https://besthqwallpapers.com/Uploads/25-3-2019/84664/thumb2-broodmother-monster-dota-2-spiders-artwork.jpg"></BoosterCard>    
        <BoosterCard mmr="0 MMR" img="https://i.pinimg.com/originals/33/a8/5a/33a85aae18c8c22d9d36ef8fc8fd7759.jpg" booster_name="Become a booster" booster_description="First 3 boosters have their place for free for 2 weeks"></BoosterCard>    
        <BoosterCard mmr="0 MMR" img="https://dmarket.com/blog/best-dota2-wallpapers/dota-2-wallpapers-invoker-dark-artsitry_hu2b9f37a952268d90694843d83f8c4f13_444148_1920x1080_resize_q75_lanczos.jpg"  booster_name="Become a booster" booster_description="First 3 boosters have their place for free for 2 weeks"></BoosterCard>    
      </div>

    </div>
  );
}

export default App;
