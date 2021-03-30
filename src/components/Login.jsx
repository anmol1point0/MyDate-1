import React from 'react'
import {GoogleLogin} from 'react-google-login'
import axios from 'axios';

const clientId = '872565835641-e8l3ubv9hk2hq32p68nhnvgbbhmdvh11.apps.googleusercontent.com';

export default function Login() {
    

    
const onSuccess = (res) => {
    
    axios({
        method: "POST",
        url : "http://localhost:8000/api/googlelogin",
        data : {tokenId: res.tokenId}

    }).then(res=> {
        console.log("Google login success", res);
    }, (err ) => {
        console.log(err)
    })

}

const onFailure = (res) =>{
    console.log('[Login failed] res:', res);
};

    return (
        <div>
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    )
}
