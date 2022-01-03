//this would be a side bar to select the different categories of the app based on small images

import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    Selected(data)
    {
        
        /* change all getelementsbyclassname sidebarimg-selected to sidebarimg */
        var sidebarimgs = document.getElementsByClassName("sidebarimg");
        for (var i = 0; i < sidebarimgs.length; i++) {
            sidebarimgs[i].className = "sidebarimg";
        }

        data.target.className = "sidebarimg-selected sidebarimg";

        if (data.target.alt == "csgo") {
            document.getElementsByClassName("main-content")[0].style.display = "none";
            document.getElementsByClassName("csgo-content")[0].style.display = "block";
        }

        if (data.target.alt == "dota2") {
            document.getElementsByClassName("main-content")[0].style.display = "grid";
            document.getElementsByClassName("csgo-content")[0].style.display = "none";
        }

    }
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-item">
                    <img onClick={this.Selected} className='sidebarimg' src={"https://i.imgur.com/kIWE0VS.png"} alt="dota2" />
                </div>

                <div className="sidebar-item">
                    <img onClick={this.Selected} className="sidebarimg" src={"https://i.imgur.com/8ThI07o.png"} alt="csgo" />
                </div>
                
            </div>
        );
    }
}
export default SideBar;