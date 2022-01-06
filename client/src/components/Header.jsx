//this is a header  component that should be used for redirection to main page and display the logo in the center of it
// to the left to be a small logo when pressed to go to main page and to the  right to be a button to go to the login page

import React from 'react';
import Button from '@material-ui/core/Button';
import BecomeABooster from './BecomeABooster';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render_BecomeBooster(data) {
        if (window.innerWidth > 1300) {
            document.getElementById("become_a_booster_root").style.display = "block";
        }
        // else if(window.innerWidth > 700 && window.innerWidth < 1300) {
        //     document.getElementById("become_a_booster_root").style.display = "block";
        //     document.getElementById("become_a_booster").style.width = "100%";
        //     document.getElementById("become_a_booster").style.height = "100%";
        // }
        else{
            console.log("window width is less than 768");
        }
        

        /* if esc is pressed, or pressed outside window close it */
        window.onkeydown = function (e) {
            if (e.keyCode == 27) {
                document.getElementById("become_a_booster_root").style.display = "none";
            }
        }
        window.onclick = function (e) {
            if (e.target == document.getElementById("become_a_booster_bg")) {
                document.getElementById("become_a_booster_root").style.display = "none";
            }
        }
    }

    refresh_website() {
        window.location.reload();
    }

    render() {
        return (
            <div className="header">
                <div className='logo'>
                    <img onClick={this.refresh_website} className='logoimg' src={"https://i.imgur.com/5IkRSrj.png"} alt="mainlogo" />
                </div>
                <div className="becomeabooster">
                    <Button onClick={this.render_BecomeBooster}  style={{
                        color: "#ebebeb",
                        backgroundColor: "#3e4c9b",
                        fontSize: "13px",
                        marginRight: "10%",
                    }} variant="contained" color="primary">Become a Booster</Button>                
                </div>
            </div>
        );
    }
}

export default Header;