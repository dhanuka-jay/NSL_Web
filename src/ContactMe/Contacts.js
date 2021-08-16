import { Button, Form, Icon, Message } from 'semantic-ui-react';
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
            <div className="contact-method-container">
                <div className="contact-phone">
                    <Icon name="facebook f" size="large" />
                    <h3>Like our facebook page</h3>
                    <h4>Northside Legegends</h4>
                </div>
                <div className="contact-email">
                    <Icon name="phone" size="large" />
                    <h3>Give us a call</h3>
                    <h4>+61 432009680</h4>                    
                </div>
                <div className="contact-facebook">
                    <Icon name="mail" size="large" /> 
                    <h3>Send us an Email</h3>
                    <h4>info@northsidelegends.com</h4>     
                </div>
            </div>
            <div className="send-message-container">
                <Form success>
                    <Form.Input label='Email' placeholder='joe@schmoe.com' />
                    <Form.Input label='Phone' placeholder='+99 9999 999' />
                    <Form.TextArea label='Message' placeholder='Your query here...' />
                    <Message
                        success
                        header="Thanks heaps for getting in touch with us."
                        content="We will get back to you as soon as we can. We appreciate your concern."
                    />
                    <Button>Send</Button>
                </Form>
            </div>
        </div>
    )
}

export default Contacts
