import React from 'react'
import FacebookLogin from 'react-facebook-login';

const Member = () => {

    const responseFacebook = (res) => {
        console.log(res);
    }

    const letsDoFacebook = () => {
        console.log('Im clicked...123456')
    }

    return (
        <div className='member-login'>
            <FacebookLogin
                appId="193590582676222"
                autoLoad={true}
                fields="name,email,picture"
                onClick={() => letsDoFacebook()}
                callback={responseFacebook} 
            />
        </div>
    )
}

export default Member
