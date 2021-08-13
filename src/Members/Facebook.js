import { useState } from 'react';
import { flushSync } from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import { Icon, Modal, Button, Image } from 'semantic-ui-react'
import './Member.css'
import MemberProfile from './MemberProfile';

const Facebook = ({isLoggedIn, setIsLoggedIn, setLoggedInMember}) => {

    const responseFacebook = (res) => {
        setLoggedInMember({
            fbName: res.name ? res.name : "bere j i",
            email: res.email ? res.email : "email@email.com",
            photoUrl: res.picture.data.url ? res.picture.data.url : "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10219019860397021&height=50&width=50&ext=1631241380&hash=AeRrJQiHwu9z3oW6_aw"
            //photoUrl: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10219019860397021&height=50&width=50&ext=1631241380&hash=AeRrJQiHwu9z3oW6_aw"
        });
        
        setIsLoggedIn(true);
    }

    const letsDoFacebook = () => {
        console.log('Fb button clicked')
    }

    return (
        <div className='member-login'>
            {
                isLoggedIn ?
                    ''
                    :
                    <FacebookLogin
                        className='fb-btn'
                        appId="526218825319359"
                        // appId="193590582676222"
                        autoLoad={false}
                        fields="name,email,picture"
                        icon={<Icon className='facebook official' size='large'/>}
                        textButton="Member Login"
                        onClick={() => letsDoFacebook()}
                        callback={responseFacebook} 
                    />
            }
        </div>
    )
}

export default Facebook
