//card class using material ui card component
//import all necesarry


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//card color #233454

class BoosterCard extends React.Component {

    //make a changable text for the description of the booster

    constructor(props) {
        super(props);
        this.state = {
            description: this.props.booster_description,
            contact_button_text: "Contact Booster"
        }

        this.ContactBooster = this.ContactBooster.bind(this);
    }


    ContactBooster(data) {
        console.log(data.target.id)

        this.setState({
            description:
                <div>
                    <center><a style={{ color: "#b5b5b5" }}>Contact</a></center>

                    {this.props.discord ? <div><a style={{ color: "#b5b5b5", }}>Discord: {this.props.discord}</a><br /></div> : <a style={{ color: "#8b8c8f", }}>No contact info available</a>}
                    {this.props.email ? <div><a style={{ color: "#b5b5b5", }}>Email: {this.props.email}</a><br /></div> : null}
                </div>
        })
        this.setState({
            contact_button_text: "See booster info"
        })

        {
            if (this.state.contact_button_text === "See booster info") {
                this.setState({
                    contact_button_text: "Contact Booster"
                })
                this.setState({
                    description: this.props.booster_description
                })

            }
        }

    }
    render() {
        return (
            <div>

                <Card className="card" sx={{
                    // width: 345,
                    // height: 345,
                    //make it look like a card
                    width: "75%",
                    height: "80%",
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
                    borderRadius: '5px',
                    margin: '10px',
                    padding: '10px',
                    backgroundColor: '#233454',
                    color: 'white'

                }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={this.props.img}
                    />
                    <CardContent style={{}}>
                        <Typography gutterBottom variant="h5" component="div">
                            <div style={{
                                //this is a grid that lets text align to the left and right
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gridGap: '10px'

                            }}>
                                <a style={{
                                    // color: "#8b8c8f"
                                    // color: "#d4d4d4"
                                    color: "#dbdbdb"
                                }}>{this.props.booster_name}</a>
                                <a style={{
                                    color: "#dbdbdb",
                                    textAlign: "right"
                                }}>{this.props.mmr}</a>
                            </div>

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <a style={{
                                color: "#b5b5b5",
                            }}>{this.state.description}</a>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <div style={{
                            //this is a grid that lets text align to the left and right
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridGap: '10px',
                            //make it full width
                            width: "100%"

                        }}>

                            <Button style={{
                                color: "#7481ca",

                            }} className='outlined_button' id={this.props.id} onClick={this.ContactBooster} variant="outlined" size="small">{this.state.contact_button_text}</Button>

                            <Button style={{
                                color: "#7481ca",
                            }} className='outlined_button' variant="outlined" size="small">Report Booster</Button>

                        </div>

                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default BoosterCard;