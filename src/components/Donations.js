import React, {Component} from 'react';
import DonationForm from './DonationForm';
import DonationInformation from './DonationInformation';
import DonationGiftForm from './DonationGiftForm';
import '../App.css';

class Donations extends Component {
    constructor(props){
        super(props);
    }

    state={
        email: 'example',
        donationAmount:0,
        donationProcessStep: 'pre',
        minimumDonationToGetGift:25,
        listOfExampleGifts:[]
    };

    componentDidMount(){
        this.getVendorGiftInfo();
    }

    getVendorGiftInfo = () => {
        {/* Make call to vendor API to get current gift info */}

        {/* Set list of current example gifts, replace with loop over the return package*/}
        let exampleGifts = [
            {
              price:25,
              item:"sticker"
            },
            {
              price:50,
              item:"t-shirt"
            },
            {
              price:100,
              item:"coffee mug"
            }
          ];

        {/* Set current minimum to get a gift */}
        const minimumAmount = Math.min(...exampleGifts.map(obj => obj['price']));
        this.setState({minimumDonationToGetGift: minimumAmount});

        this.setState({listOfExampleGifts: exampleGifts});
    }

    handleEmailValueChange = (email) => {
        this.setState({email:email})
    }

    handleDonationAmountValueChange = (amount) => {
        this.setState({donationAmount:amount})
    }

    handleProcessStepAdvance = (step) => {
        this.setState({donationProcessStep:step})
        console.log(this.state.donationProcessStep);
    }

    renderProcessStep = (step) => {
        switch(step){
            case 'pre':
                return(
                    <DonationForm 
                        emailValueChange={this.handleEmailValueChange}
                        donationValueChange={this.handleDonationAmountValueChange}
                        advanceProcess={this.handleProcessStepAdvance}
                        minimumDonationToGetGift={this.state.minimumDonationToGetGift}
                    />
                );
            case 'gift':
                return(
                    <DonationGiftForm 
                        email={this.state.email}
                        donationAmount={this.state.donationAmount}
                        advanceProcess={this.handleProcessStepAdvance}
                    />
                );
            case 'finished':
                return(
                    <div>
                        <h1>Thank you for your donation of ${this.state.donationAmount}!</h1>
                        {this.state.donationAmount >= this.state.minimumDonationToGetGift ? 
                            <p>You should receive an email with details about your gift and receipt for your donation.</p>
                            :
                            <p>You should receive an email with a receipt for your donation.</p>
                        }
                    </div>
                );
            default:
                return(
                    <DonationForm 
                        emailValueChange={this.handleEmailValueChange}
                        advanceProcess={this.handleProcessStepAdvance}
                        minimumDonationToGetGift={this.state.minimumDonationToGetGift}
                    />
                );
        }
    }

    render(){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-8">
                        <DonationInformation 
                            exampleGifts={this.state.listOfExampleGifts}
                        />
                    </div>
                    <div className="col-4">
                        {this.renderProcessStep(this.state.donationProcessStep)}
                    </div>
                </div>
            </div>
        );
    }

}

export default Donations;