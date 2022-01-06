//become a booster page that is executed after becomeabooster button is pressed
// Language: javascript
// Path: src\components\BecomeABooster.jsx
// Compare this snippet from src\components\Header.jsx:

import React from 'react';
import { TextField } from '@mui/material';
import Button from '@material-ui/core/Button';
import ReCAPTCHA from "react-google-recaptcha";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';


class BecomeABooster extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    onChange(value) {
        document.getElementById("become_a_booster_submit").style.display = "block";
    }

    SubmitBecomeBooster(data) {
        // discord webhook: https://discord.com/api/webhooks/928481603167080528/4jDoFf64yF5RaLBO5nK-1NnNMX90MXZHKdwx25XNXrBFGVTxY9Fj7Oa2DG3btDydKD_b


        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/928481603167080528/4jDoFf64yF5RaLBO5nK-1NnNMX90MXZHKdwx25XNXrBFGVTxY9Fj7Oa2DG3btDydKD_b");

        request.setRequestHeader('Content-type', 'application/json');

        let user_ip = "";
        fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => user_ip = data);
        

        const params = {
            username: "Become a Booster",
            avatar_url: "",
            content: "__Username:__ " + document.getElementById("nickname").value 
            + "\n__Description:__ " + document.getElementById("description").value
            + "\n__Profile Picture:__ " + document.getElementById("profile").value 
            + "\n__MMR:__ " + document.getElementById("mmr").value
            + "\n__Contact:__ " + document.getElementById("contact").value  
            + "\n__IP:__ " + user_ip 
            + "\n__Time:__ " + new Date().toLocaleString()
            + "\n__User Agent:__ " + navigator.userAgent
            + "\n__Browser:__ " + navigator.appName
            + "\n__Browser Version:__ " + navigator.appVersion
        }

        request.send(JSON.stringify(params));
        store.addNotification({
            title: "Application Sent!",
            message: "Your application has been sent and you will be contacted soon.",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });

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
                                <TextField id="nickname" sx={{
                                    input: { color: '#dbdbdb' },
                                    label: { color: '#b5b5b5' },
                                }} label="Nickname" variant="outlined" />
                                <TextField id="description" sx={{
                                    input: { color: '#dbdbdb' },
                                    label: { color: '#b5b5b5' },
                                }} label="Description" variant="outlined" />
                                <TextField id="profile" sx={{
                                    input: { color: '#dbdbdb' },
                                    label: { color: '#b5b5b5' },
                                }} label="Profile Picture URL" variant="outlined" />
                                <TextField id="mmr" sx={{
                                    input: { color: '#dbdbdb' },
                                    label: { color: '#b5b5b5' },
                                }} label="MMR" variant="outlined" />
                                <TextField id="contact" sx={{
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
                    <div style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5%",

                    }}>

                    <ReCAPTCHA
                    sitekey="6LeN1_MdAAAAAG47xcmCZRXbBH31274ZUz-GoEeo"
                    onChange={this.onChange}
                    />,
                    </div>
                    <Button id="become_a_booster_submit" onClick={this.SubmitBecomeBooster} style={{
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
                        height: "50px",
                        borderRadius: "5px",
                        border: "none",
                        display: "none"



                    }} variant='contained'> Send Application </Button>
                </div>
            </div>
        );
    }
}

export default BecomeABooster;
