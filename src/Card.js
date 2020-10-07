import React from 'react';
import { Card } from 'react-bootstrap';
import image from './images.jpeg';
import './cards.css';


 function Cards( {gifurl, gifusername, avatarphoto, giftitle, gifdate } ){
    return(
        <div className="singlegif">
            <Card style={{ width: '18rem' }} className="box" >
                
                <Card.Body style={{ padding: "5px" }}>
                    <div className="avatarbox"><img className="avatarphoto" src={image} />
                    <Card.Title className="namedate"> {gifusername} {"\n"}<span> {gifdate} </span></Card.Title>
                    </div>
                    
                    <Card.Text>
                      {giftitle}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Img className="gifarea" variant="top" src={gifurl} />
            </Card>
        </div>
    );
}

export default Cards;

