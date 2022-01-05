//this is a header  component that should be used for redirection to main page and display the logo in the center of it
// to the left to be a small logo when pressed to go to main page and to the  right to be a button to go to the login page

import React from 'react';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div className="header">
                <div className='logo'>
                    <img className='logoimg' src={"https://i.imgur.com/5IkRSrj.png"} alt="mainlogo" />
                </div>
                <div className="becomeabooster">
                    <Button style={{
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