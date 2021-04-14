import React, { useState, useEffect } from 'react';

import firebase from '@firebase/app';
import '@firebase/database';
import "firebase/auth";

import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// or

import history from '../../History';
import Loader from "react-loader-spinner";

export default function LoginPage() {

    const [users, setUsers] = useState();

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
        history.push({pathname: '/questlist', state: { uid2: res }})
        console.log('[Login Success] currentUser:', res);

        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };
    

    const onSuccessLogout = async (res) => {
        alert('Logout made successfully');
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
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px'}}
            isSignedIn={true}
          />
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccessLogout}
          >
          </GoogleLogout>
        </div> 
    );

}

const styles = {
  loading: {
    backgroundColor: 'gray', 
    height: 700, 
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1, 
    flexDirection: 'column'
  }
};

/*
import React, { useState, useEffect } from 'react';

import firebase from '@firebase/app';
import '@firebase/database';
import "firebase/auth";

import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// or

import history from '../../History';
import Loader from "react-loader-spinner";

export default function LoginPage() {

    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);

    const clientId = '625117253701-s8cmkt6i5k86un937u4dp5ulbf0bl11b.apps.googleusercontent.com';

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
          }, 6000);
    }, [])
    
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
        history.push({pathname: '/questlist', state: { uid2: res }})
        console.log('[Login Success] currentUser:', res);

        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };
    

    const onSuccessLogout = async (res) => {
        alert('Logout made successfully');
    };


    return (
        <div>
        {loading ?
        <div style={styles.loading}>
            <Loader
            type="Oval"
            color="#00BFFF"
            height={100}
            width={100}
            
          />
        </div>
          
          :<div>
            <div>Olá, mundo</div>
          </div>
          
        
        }
        </div>
    );

}

const styles = {
  loading: {
    backgroundColor: 'gray', 
    height: 700, 
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1, 
    flexDirection: 'column'
  }
};
*/