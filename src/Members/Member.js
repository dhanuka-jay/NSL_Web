import React from 'react'
import FacebookLogin from 'react-facebook-login';

const Member = () => {

    const responseFacebook = (res) => {
        console.log(res);
    }

    return (
        <div className='member-login'>
            <FacebookLogin
                appId="193590582676222"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook} 
            />
        </div>
    )
}

export default Member
