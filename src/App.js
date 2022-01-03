import logo from './logo.svg';
import './App.css';
import BoosterCard from './components/BoosterCard';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Overlay from './components/Overlay';
import LandingPage from './components/LandingPage';
import Particles from "react-tsparticles";

function App() {
  return (
    <div className="App">
      {/* <Overlay /> */}
      <div className='landingpage' id="landing">
      <Particles
                    id="tsparticles"
                    options={{
                        background: {
                            color: {
                            },
                        },
                        fpsLimit: 144,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 3,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 0.8,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 30,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
        <LandingPage/>
      </div>

      <div id='main' style={{display: "none"}}>
        <Header/>
        <SideBar/>

        <div className='main-content'>
          <BoosterCard id="krane" mmr="5600 MMR" img="https://www.earlygame.com/uploads/images/meepo-guide-fan-art.jpg" booster_name="krane" booster_description="I have played dota2 for a long while, and i gathered the information needed to boost you to the next level"></BoosterCard>    
          <BoosterCard id="Become a booster" mmr="0 MMR" booster_name="Become a booster" booster_description="First 3 boosters have their place for free for 2 weeks" img="https://besthqwallpapers.com/Uploads/25-3-2019/84664/thumb2-broodmother-monster-dota-2-spiders-artwork.jpg"></BoosterCard>    
          <BoosterCard id="Become a booster" mmr="0 MMR" img="https://i.pinimg.com/originals/33/a8/5a/33a85aae18c8c22d9d36ef8fc8fd7759.jpg" booster_name="Become a booster" booster_description="First 3 boosters have their place for free for 2 weeks"></BoosterCard>    
          <BoosterCard id="Become a booster" mmr="0 MMR" img="https://dmarket.com/blog/best-dota2-wallpapers/dota-2-wallpapers-invoker-dark-artsitry_hu2b9f37a952268d90694843d83f8c4f13_444148_1920x1080_resize_q75_lanczos.jpg"  booster_name="Become a booster" booster_description="First 3 boosters have their place for free for 2 weeks"></BoosterCard>    
        </div>
        <div className='csgo-content'>
          <BoosterCard id="Become a booster" mmr="Silver" img="https://i.imgur.com/FTwGbEr.jpg"  booster_name="Become a booster" booster_description="First 3 boosters have their place for free for 2 weeks"></BoosterCard>    
        </div>
      </div>
    </div>
  );
}

export default App;
