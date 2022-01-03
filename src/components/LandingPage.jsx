//landing page with text centered on it and a animated background
import { Button } from '@mui/material';
import React from 'react';
import reactDom from 'react-dom';

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
                <h1> Landing page </h1>
                <Button variant="outlined" onClick={this.GoToWebsite}>Go to Website</Button>
               
            </div>
        );
    }
}
export default LandingPage;