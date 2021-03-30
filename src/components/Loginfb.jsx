import React from 'react';
import FacebookLogin from 'react-facebook-login';

function Loginfb() {
  
  

  const responseFacebook = (response) => {
    console.log(response);
    
  }

  return (
      <div>
          <FacebookLogin
              appId="2820485601501145"
              autoLoad={false}
              callback={responseFacebook}
              icon="fa-facebook" />
      </div>
            
  )
}

export default Loginfb;