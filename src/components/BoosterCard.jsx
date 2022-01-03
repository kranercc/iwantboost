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

    ContactBooster(data) {
        console.log(data.target.id)
    }

    render() {
        return (
            <div>
                
                <Card className="card" sx={{
                    width: 345,
                    height: 345,
                    //make it look like a card
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
                                    color: "#d4d4d4"
                                }}>{this.props.booster_name}</a>
                                <a style={{
                                    color: "#d4d4d4",
                                    textAlign: "right"
                                }}>{this.props.mmr}</a>
                            </div>

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <a style={{
                                color: "#8b8c8f",  
                            }}>{this.props.booster_description}</a>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <div style={{
                            //this is a grid that lets text align to the left and right
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridGap: '10px',
                        }}>

                            <Button  id={this.props.id} onClick={this.ContactBooster} variant="outlined" size="small">Contact Booster</Button>
                            <Button variant="outlined" size="small">Report Booster</Button>
                        </div>

                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default BoosterCard;