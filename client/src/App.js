import logo from './logo.svg';
import './App.css';
import './mui.css';
import './become_a_booster.css';
import BoosterCard from './components/BoosterCard';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Overlay from './components/Overlay';
import LandingPage from './components/LandingPage';
import Particles from "react-tsparticles";
import BecomeABooster from './components/BecomeABooster';
import ReactNotification from 'react-notifications-component';
function App() {
    return (
        <div className="App">
            <ReactNotification />
            <div className='background_body'></div>

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

                <div className='landingpageBackground'></div>
                <LandingPage />
               
               

            </div>
            
            <div id='main' style={{ display: "none" }}>
                <Header />
                <SideBar />

                <div className='main-content'>
                    <BoosterCard email="kranedota3@gmail.com" discord="krane#2890" id="krane" mmr="5600 MMR" img="https://www.earlygame.com/uploads/images/meepo-guide-fan-art.jpg" booster_name="krane" booster_description="I have played dota2 for a long while, and i gathered the information needed to boost you to the next level"></BoosterCard>
                    <BoosterCard email="jais4noreturn@gmail.com" discord="pixzy#2798" id="Jaijaigaming" mmr="5790 MMR" booster_name="Jaijaigaming" booster_description="I can play dota 24/7, I have played since 2014 and i'm ready to boost you. Contact me, I respond fast ;)" img="https://cdn.discordapp.com/attachments/928166531119054938/928168894319976469/FB_IMG_1639647084554.jpg"></BoosterCard>
                    <BoosterCard email="mamaroo200@gmail.com" discord="Restart#7799" id="Restart" mmr="6890 MMR" img="https://i.pinimg.com/originals/33/a8/5a/33a85aae18c8c22d9d36ef8fc8fd7759.jpg" booster_name="Restart" booster_description="I can play 10+ games per day, my role is carry/mid. For boost contact me, thank you!"></BoosterCard>
                    <BoosterCard email="gundum.co.th@gmail.com" discord="RAVR#5644" id="ravr" mmr="6900 MMR" img="https://cdn.discordapp.com/attachments/928176702750855249/928435931202072586/doctor.jpg" booster_name="ravr" booster_description=" i have been playing moba for like half of my life i'm pretty sure i can boost you to any rank you want"></BoosterCard>
                </div>
                <div className='csgo-content'>
                </div>
            </div>

            <BecomeABooster/>
        </div>
    );
}

export default App;

