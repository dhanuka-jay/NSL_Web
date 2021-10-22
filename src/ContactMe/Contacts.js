import emailjs from 'emailjs-com';
import { Button, Form, Icon, Modal, Divider, Header } from 'semantic-ui-react';
import { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nsl_cricket', 'nsl_email_template', e.target, 'user_YWybZdEldONxtoh7c2bJ2')
        .then((result) => {
            // console.log(result.text);
            console.log(result.text, 'Message recieved')
        }, (error) => {
            // console.log(error.text);
            console.log('Message recieved')
        });
        
        e.target.reset();

        setIsModalOpen(true);
    }

    return (
        <div className="contacts-container">
            <div className="contact-header">
                <div className="contact-big-header">
                    <h1>"Compromise for your Dream but never Compromise on your Dream.”</h1>
                    <h4>Imran Khan</h4>
                </div>
                <div className="contact-small-header">
                    <h3>Are you looking to get into cricket?</h3>
                </div>
            </div>
            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>
            <div className="contact-method-container">
                <div className="contact-facebook">
                    <div className="icon-div">
                        <Icon name="facebook f" size="big" />
                    </div>
                    <h4>Follow us on facebook</h4>
                    <a href="https://www.facebook.com/NorthSide-Legends-540287353026304" target='_blank'>
                        <h3>Northside Legends</h3>
                    </a>                    
                </div>
                <div className="contact-phone">
                    <div className="icon-div">
                        <Icon name="phone" size="large" />
                    </div>
                    <h4>Give us a call</h4>
                    <h3>+61 423 863519</h3>
                    <h3>+61 435 399304</h3>                    
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
                    <Form.Group widths="equal">
                        <Form.Input label='Name' name="Name" placeholder='Your Name' required/>
                        <Form.Input type="email" name="Email" label='Email' placeholder='joe@schmoe.com' required/>   
                        <Form.Input label="Phone" name="Phone" placeholder="04xx xxx xxx" required />                     
                    </Form.Group>
                    <Form.TextArea label='Message' name="Message" placeholder='Your query here...' required/>
                    <Button 
                        type="submit"
                        size="large" 
                        floated="right"
                    >Send</Button>
                </Form>
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
