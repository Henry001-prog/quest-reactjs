import React, { useState, useEffect } from 'react';

import firebase from '@firebase/app';
import '@firebase/database';
import "firebase/auth";

import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// or

import history from '../../History';
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";

export default function Redirects() {

    const location = useLocation();

    const { dataQA } = location.state;

    const [data, setData] = useState(dataQA);

    const clientId = '625117253701-s8cmkt6i5k86un937u4dp5ulbf0bl11b.apps.googleusercontent.com';

    
    const refreshTokenSetup = (res) => {
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
            console.log('newAuthRes:', newAuthRes);
            console.log('new auth Token', newAuthRes.id_token);

            setTimeout(refreshToken, refreshTiming);
        };

        setTimeout(refreshToken, refreshTiming);
    };

    const onSuccess = async (res) => {
        history.push({pathname: '/questlist', state: { uid2: res }, state2: { dataRedirect: data }})
        console.log('[Login Success] currentUser:', res);

        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };


    return (
        <div style={styles.loading}>
          <Loader
            type="Oval"
            color="#00BFFF"
            height={100}
            width={100}
          />
          <GoogleLogin
            clientId={clientId}
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{backgroundColor: 'transparent', border: 'transparent'}}></button>
            )}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px'}}
            isSignedIn={true}
          />

        </div> 
    );

}

const styles = {
  loading: {
    backgroundColor: 'gray', 
    height: '100vh', 
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1, 
    flexDirection: 'column'
  }
};
