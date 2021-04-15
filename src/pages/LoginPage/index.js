import React, { useState } from 'react';

import '@firebase/database';
import "firebase/auth";


import { GoogleLogin } from 'react-google-login';
// or

import Loader from "react-loader-spinner";


import history from '../../History';
import useViewport from '../../resources/responsive';

export default function LoginPage() {

    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        history.push({pathname: '/questionnaire', state: { dataItem: res }})
        console.log('[Login Success] currentUser:', res);
        setLoading(false);

        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    function renderLoading() {
        if (loading)
            return <Loader type="Oval" color="#00BFFF" height={100} width={100} />;
        return null;
    }

    const { width } = useViewport();
    const breakpoint = 620;

    return (
        width < breakpoint ?
        <div style={styles.divLoginMobile}>
            <div style={{display: 'flex', padding: 50, textAlign: 'center', fontSize: 30}}>Faça o login para poder começar a criar e responder formulários.</div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />
                {renderLoading()}
        </div>

        :

        <div style={styles.divLoginDesktop}>
            <div style={{display: 'flex',  textAlign: 'center', paddingBottom: 60, fontSize: 30}}>Faça o login para poder começar a criar e responder formulários.</div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />
                {renderLoading()}
        </div>
        
        
    );

}

const styles = {
    divLoginDesktop: {
        flexDirection: 'column',
        backgroundColor: 'gray', 
        height: '100vh', 
        width: '100%', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    divLoginMobile: {
        flexDirection: 'column',
        backgroundColor: 'gray', 
        height: '100vh', 
        width: '100%', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    }
};