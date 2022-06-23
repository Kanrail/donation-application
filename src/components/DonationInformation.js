import React from 'react';
import appealImage from '../images/polina-kuzovkova-0ACbpbZGpbA-unsplash.jpg';
import {Popover, OverlayTrigger, Button} from 'react-bootstrap';
import '../App.css';

function renderExampleGiftsPopover (props){
    let exampleGifts = [];

    if(props !== undefined){
        exampleGifts = props;
    }

    return(
        <Popover id="gift-popover-right">
            <Popover.Header as="h3">More Info on Gifts</Popover.Header>
            <Popover.Body>
                <p>Depending on your donation amount, you could get any number of gifts.</p>
                <p>Some examples (they change often):</p>
                <ul>
                    {
                        exampleGifts.map((gift) =>
                            <li key={gift.price}>${gift.price} - {gift.item}</li>
                        )
                    }
                    <li>$100,000,000 - your name on the front of the building<span>&#8212;</span>of course!</li>
                </ul>
            </Popover.Body>
        </Popover>
    );
}

const DonationInformation = (props) => {
    return(
        <div>
            <div className="row">
                <img src={appealImage} className="Donations-appeal-image" alt="appeal-image" />
            </div>
            <div className="row py-3">
                <h2>
                    Donate today to get a gift! &ensp;
                    <OverlayTrigger 
                        trigger="click" 
                        placement="right" 
                        overlay={renderExampleGiftsPopover(props.exampleGifts)}
                    >
                        <Button  style={{width:100}}>More Info</Button>
                    </OverlayTrigger>
                </h2>

            </div>
            <div className="row">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
} 

export default DonationInformation;