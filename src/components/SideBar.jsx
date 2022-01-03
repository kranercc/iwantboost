//this would be a side bar to select the different categories of the app based on small images

import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-item">
                    <img className='sidebarimg' src={"https://i.imgur.com/kIWE0VS.png"} alt="sidebar-item" />
                </div>
                <div className="sidebar-item">
                    <img className="sidebarimg" src={"https://i.imgur.com/8ThI07o.png"} alt="sidebar-item" />
                </div>
                
            </div>
        );
    }
}
export default SideBar;