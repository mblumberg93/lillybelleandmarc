import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, ButtonToolbar, Button, Radio, RadioGroup, Message } from 'rsuite';
import { useState } from "react";
import emailjs from 'emailjs-com';
import emailconfig from './emailkey';
 
function Rsvp() {

    const [ formData, setFormData ] = useState({});
    const [ attending, setAttending ] = useState(null);
    const [ enteringData, setEnteringData ] = useState(true);

    const submitForm = () => {
        let rsvpForm = Object.assign({}, formData)
        rsvpForm.attending = attending;
        setEnteringData(false);
        emailjs.send(emailconfig.SERVICE_ID, emailconfig.TEMPLATE_ID, rsvpForm, emailconfig.USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="page-container">
            <h2 className="page-header">RSVP</h2>
            <div className="page-content">
                <div className="page-content-text-full">
                    <p>We are so excited to have you for our special day! Please fill out the following form to RSVP for the wedding. Make sure to indicate the total number of guests in your party. If you are bringing a "plus one" please include them in the total. For clarification, single individuals with "and Guest" in their invitation have been officially extended an optional "plus one". If you have any questions please reach out to LillyBelle and Marc directly. Thank you!</p>
                </div>
                { enteringData && 
                    <div className="page-form">
                        <Form onChange={formValue => { setFormData(formValue); }}>
                            <FormGroup controlId="attending">
                                <RadioGroup name="attending" onChange={value => {setAttending(value);}}>
                                    <ControlLabel>Will You Be Attending The Wedding?</ControlLabel>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                                </RadioGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Party Name</ControlLabel>
                                <FormControl name="party" />
                                <HelpBlock tooltip>This is simply a name for your party. Examples include "Williams Family", "Lauren and David", and "Matt Valentine".</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Number of Guests in Your Party</ControlLabel>
                                <FormControl name="guests" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Names of Guests</ControlLabel>
                                <FormControl name="names" />
                                <HelpBlock tooltip>This is just a list of individuals in your party. An example would be "Sheila, Kimo, James, Halia, Nanea, Jordan".</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Contact Email Address</ControlLabel>
                                <FormControl name="email" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Contact Phone Number</ControlLabel>
                                <FormControl name="phone" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Food Allergies and/or other Dietary Restrictions</ControlLabel>
                                <FormControl name="restrictions" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Additional Comments and/or Questions</ControlLabel>
                                <FormControl rows={5} name="comments" componentClass="textarea" />
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button appearance="primary" onClick={submitForm}>Submit</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </div>
                }
                { !enteringData && 
                    <div className="submission-message">
                        <Message description="Thank you for submitting your RSVP! You should receive a confirmation email shortly." />  
                    </div>
                    
                }
            </div>
        </div>
    );
}
 
export default Rsvp;