import emailjs from 'emailjs-com';
import { Button, Form, Icon, Modal, Divider, Header } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import './Contacts.css';

const Contacts = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);    

    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nsl_cricket', 'nsl_email_template', e.target, 'user_YWybZdEldONxtoh7c2bJ2')
        .then((result) => {
            console.log(result.text, 'Message recieved')
        }, (error) => {
            console.log(error)
        });
        
        e.target.reset();

        setIsModalOpen(true);
    }

    return (
        <div className="contacts-container">
            <div className="contact-header">
                <div className="contact-big-header">
                    <h2>"Compromise for your Dream but never Compromise on your Dream”</h2>
                    <h4>Imran Khan</h4>
                </div>                
            </div>
            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>
            <div className="contact-small-header">
                <div className="p-desc">Are you looking to get into cricket?</div>
            </div>
            <div className="contact-method-container">
                <div className="contact-phone">
                    <div className="icon-div">
                        <Icon name="phone" size="large" />
                    </div>
                    <h4>Give us a call</h4>
                    <div className="phone-container">
                        <h3>+61 423 863519</h3>
                        <h3 className="slash"> &ensp;/&ensp; </h3>
                        <h3>+61 435 399304</h3> 
                    </div>                                       
                </div>
                <div className="contact-email">
                    <div className="icon-div">
                        <Icon name="mail" size="big" /> 
                    </div>
                    <h4>Send us an Email</h4>
                    <h3>info@northsidelegends.com.au</h3>     
                </div>
            </div>
            <Divider horizontal>
                <Header as='h2'>
                    <Icon name='mail outline' />
                    Message Us..
                </Header>
            </Divider>
            <div className="send-message-container">
                <Form size="large" onSubmit={sendMessage}>
                    <Form.Group>
                        <Form.Input label='Name' name="Name" placeholder='Your Name' required width={10}/>                          
                        <Form.Input label="Phone" name="Phone" placeholder="04xx xxx xxx" maxLength="10" required width={6}
                            onKeyDown={(evt) => {
                                //Restrict from entering characters other than numeric & backspace, delete, arrow keys
                                const acceptedChars = [8, 37, 39, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]

                                if (!acceptedChars.includes(evt.which))
                                {
                                        evt.preventDefault();                            
                                }
                            }}
                        />                     
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Input type="email" name="Email" label='Email' placeholder='john@smith.com' required/> 
                    </Form.Group>
                    <Form.TextArea label='Message' name="Message" placeholder='Your query here...' required/>
                    <Button 
                        type="submit"
                        size="small" 
                        floated="right"
                    >Send</Button>
                </Form>
            </div>
            <div className="terms-cond">
                <p className="p-desc section-1">
                *Terms and conditions applicable for the registration:
                </p>
                <p className="p-desc section-2">
                The NSL Executive Committee will make the final decision with regard to acceptance of an individual as a registered player, 
                including such considerations as status of clearances from previous clubs, final numbers of registrations received at close 
                of registration period, or failure to provide accurate information about playing history.</p>
            </div>
            <div className="contact-overlay"></div>

            <Modal
                basic
                onClose={() => setIsModalOpen(false)}
                open={isModalOpen}
                size='small'
                >
                <Header icon>
                    <Icon name='envelope open' />
                    Thank you!
                </Header>
                <Modal.Content>
                    <p>
                    We recieved your message. We will get back to you as soon as we can.
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' inverted onClick={() => setIsModalOpen(false)}>
                    <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default Contacts
