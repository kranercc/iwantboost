//this is a white overlay that is used to block out the rest of the screen but is semi transparent
import React from 'react';

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div className="overlay">
                <div className="overlaydata">
                    <p class="wip">Work in Progress</p>
                    <p class="info">If you want to become a booster or get your account boosted <br/> contact krane#2890 on discord</p>
                </div>
            </div>
        );
    }
}

export default Overlay;