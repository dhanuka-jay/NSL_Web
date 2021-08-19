import Thankyou from './ThankyouPage';
import { Button, Form, Icon, Message, Divider, Header } from 'semantic-ui-react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-container">
            <div className="contact-header">
                <div className="contact-big-header">
                    <h1>Keep in touch with us...</h1>
                </div>
                <div className="contact-small-header">
                    <h3>It's great to have you here! Let's get in touch for sure.</h3>
                </div>
            </div>
            <Divider horizontal>
                <Header as='h2'>
                    <Icon name='handshake' />
                    Reach Us On..
                </Header>
            </Divider>
            <div className="contact-method-container">
                <div className="contact-facebook">
                    <Icon name="facebook f" size="big" />
                    <h4>Like our facebook page</h4>
                    <h3>Northside Legends</h3>
                </div>
                <div className="contact-phone">
                    <Icon name="phone" size="big" />
                    <h4>Give us a call</h4>
                    <h3>+61 432009680</h3>                    
                </div>
                <div className="contact-email">
                    <Icon name="mail" size="big" /> 
                    <h4>Send us an Email</h4>
                    <h3>info@northsidelegends.com</h3>     
                </div>
            </div>
            <Divider horizontal>
                <Header as='h2'>
                    <Icon name='mail outline' />
                    Message Us..
                </Header>
            </Divider>
            <div className="send-message-container">
                <Form size="large" action="https://formsubmit.co/dhanuka.singhe@gmail.com" method="POST">
                    <Form.Group widths="equal">
                        <Form.Input label='Name' name="name" placeholder='Your Name' required/>
                        <Form.Input type="email" name="email" label='Email' placeholder='joe@schmoe.com' required/>                        
                    </Form.Group>
                    <input type="hidden" name="_next" value={<Thankyou />} />
                    <Form.TextArea label='Message' name="message" placeholder='Your query here...' required/>
                    <Button type="submit" size="large" floated="right">Send</Button>
                </Form>
            </div>
            <div className="contact-overlay"></div>
        </div>
    )
}

export default Contacts
