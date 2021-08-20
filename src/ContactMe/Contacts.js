import emailjs from 'emailjs-com';
import { Button, Form, Icon, Modal, Divider, Header } from 'semantic-ui-react';
import { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ids_mail', 'template_4nzquvn', e.target, 'user_YWybZdEldONxtoh7c2bJ2')
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
                    <a href="https://www.facebook.com/NorthSide-Legends-540287353026304" target='_blank'>
                        <h3>Northside Legends</h3>
                    </a>                    
                </div>
                <div className="contact-phone">
                    <Icon name="phone" size="big" />
                    <h4>Give us a call</h4>
                    <h3>0423 863519</h3>                    
                </div>
                <div className="contact-email">
                    <Icon name="mail" size="big" /> 
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
