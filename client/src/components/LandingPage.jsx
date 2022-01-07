//landing page with text centered on it and a animated background
import { Button } from '@mui/material';
import React from 'react';

class LandingPage extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
        }
    }

    GoToWebsite() {
        document.getElementById("main").style.display = "block";
        document.getElementById("landing").style.display = "none";

    }

    render() {
        return (
            <div className='landingpage_elements'>
                <div className='title_landing_page'>
                    <h1> I WANT BOOST </h1>
                    <div className='underline'></div>
                </div>
                <h2 className="description_landing_page"> A boosting platform where you can talk directly with the booster</h2>
                <h2 className="description_landing_page"> You pay $0 to the website, only pay the booster</h2>
                
                <br/>
                <div className='supported_games'>
                    <h2 className='description_landing_page'> Games </h2>
                    <div className='game_iconname_grid'>
                        <div className='icon_close_to_name'>
                            <img className='sidebarimg' src={"https://i.imgur.com/8ThI07o.png"} alt="game_icon" />
                        </div>
                        <h2 className='game_name'> CSGO </h2>
                    </div>


                    <div className='game_iconname_grid'>
                        <div className='icon_close_to_name'>
                            <img className='sidebarimg' src={"https://i.imgur.com/kIWE0VS.png"} alt="game_icon" />
                        </div>
                        <h2 className='game_name'> Dota2 </h2>
                    </div>
                </div>
                <br/>
                <Button style={{
                        color: "#7481ca",
                }} className='outlined_button' variant="outlined" onClick={this.GoToWebsite}>Go to Website</Button>
               
            </div>
        );
    }
}
export default LandingPage;