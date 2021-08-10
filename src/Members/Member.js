import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Icon } from 'semantic-ui-react'
import './Member.css'

const Member = () => {

    const [loggedInMember, setLoggedInMember] = useState({});

    const responseFacebook = (res) => {
        setLoggedInMember({
            fbName: res.name,
            email: res.email,
            photoUrl: res.picture.data.url
        })
        console.log(loggedInMember);
    }

    const letsDoFacebook = () => {
        console.log('Im clicked...123456')
    }

    return (
        <div className='member-login'>
            <FacebookLogin
                className='fb-btn'
                appId="526218825319359"
                autoLoad={false}
                fields="name,email,picture"
                icon={<Icon className='facebook official' size='large'/>}
                textButton="Member Login"
                onClick={() => letsDoFacebook()}
                callback={responseFacebook} 
            />
        </div>
    )
}

export default Member
