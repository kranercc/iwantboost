//become a booster page that is executed after becomeabooster button is pressed
// Language: javascript
// Path: src\components\BecomeABooster.jsx
// Compare this snippet from src\components\Header.jsx:

import React from 'react';
import { TextField } from '@mui/material';
import Button from '@material-ui/core/Button';

class BecomeABooster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div id="become_a_booster_root" className='become_a_booster_root'>
                <div id="become_a_booster_bg" className='become_a_booster_bg'></div>

                <div id="become_a_booster" className="become_a_booster_page">
                    <div className="become_a_booster_title">
                        <h1>Become a Booster</h1>
                    </div>
                    <div className='underline' />
                    <div className="become_a_booster_panel">
                        <form>
                            <div className="information_form">
                                <div className="become_a_booster_information">
                                    <h2>Profile</h2>
                                </div>
                                {/* <ModernTextField label="Nickname" /> */}
                                <TextField sx={{
                                    input: { color: '#dbdbdb' },
                                    label: { color: '#b5b5b5' },
                                }} label="Nickname" variant="outlined" />
                                <TextField sx={{
                                    input: { color: '#dbdbdb' },
                                    label: { color: '#b5b5b5' },
                                }} label="Description" variant="outlined" />
                                <TextField sx={{
                                    input: { color: '#dbdbdb' },
                                    label: { color: '#b5b5b5' },
                                }} label="Profile Picture URL" variant="outlined" />
                                <TextField sx={{
                                    input: { color: '#dbdbdb' },
                                    label: { color: '#b5b5b5' },
                                }} label="MMR" variant="outlined" />
                                <TextField sx={{
                                    input: { color: '#dbdbdb' },
                                    label: { color: '#b5b5b5' },
                                }} label="Contact (discord/email)" variant="outlined" />
                            </div>
                        </form>
                        <div className='diagonal_separator'></div>
                        <div>
                            <div className="become_a_booster_information">
                                <h2>Information</h2>
                                <h3 style={{ textAlign: 'left', paddingLeft: "5%" }}>Required:</h3>
                                <div style={{
                                    textAlign: "left",
                                    paddingLeft: "13%",
                                }}>
                                    <p>MMR: more than 5.000</p>
                                    <p>Behavior Score: more than 8.000</p>
                                    <p>Account level: more than 24</p>
                                    <p>Dota2 hours played: more than 1.000</p>
                                </div>
                                <h3 style={{ textAlign: 'left', paddingLeft: "5%" }}>Strategy:</h3>
                                <div style={{
                                    textAlign: "left",
                                    paddingLeft: "13%",
                                }}>
                                    <p>You pay 2-4€ / week (depending on your rank) for your booster slot</p>
                                    <p>You can take ± 100% of price for your order (+1.000 behavior score = 15 eur, you can ask client to pay no less than 0 and no more than 30 eur)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='underline'></div>

                    <Button style={{
                        color: "#ebebeb",
                        backgroundColor: "#3e4c9b",
                        fontSize: "13px",
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        margin: "auto",
                        marginTop: "10px",
                        marginBottom: "10px",
                        width: "100%",
                        height: "40px",
                        borderRadius: "5px",
                        border: "none",


                        
                    }} variant='contained'> Send Application </Button>
                </div>
            </div>
        );
    }
}

export default BecomeABooster;
