import React, { useState, useEffect } from 'react';
import { ViewList, DivForm } from './styles';
import QuestCard from '../../components/QuestCard';
import AddQuestCard from '../../components/AddQuestCard';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import firebase from '@firebase/app';
import '@firebase/database';
//import history from '../../History';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Loader from "react-loader-spinner";

export default function MyQuest({ navigation }) {
    //const title = navigation.getParam('title');
    //const [creatorAuthor, setCreatorAuthor] = useState('');
    //const [user, setUser] = useState('');
    //const [dateCreator, setDateCreator] = useState('');
    //const [dateUser, setDateUser] = useState('');
    // const [customFields, setCustomFields] = useState([{}]);
    const location = useLocation();
    const { items } = location.state;
    const { uid2 } = location.state2;
    //console.log('teste:', uid2)

    const clientId = '625117253701-s8cmkt6i5k86un937u4dp5ulbf0bl11b.apps.googleusercontent.com';

    const [data, setData] = useState(items);
    const [data2, setData2] = useState('');
    //console.log('testando:', data2);
    
    useEffect(() => {
      function datas() {
        data.map((item, index) => (
          setData2(item.uid)
        ))
      }
      datas();
    }, [data])
    

    //console.log('Olá:', data2);
    const userId = JSON.stringify(data2);
    //console.log('Olá:', userId);


    //const uid = JSON.stringify(uid2.googleId); //aqui eu separo o googleId em formato de string
    //console.log('string:', uid2);
    //const { googleId } = uid2.googleId;
    const [uid, setUid] = useState(uid2);
     
    console.log('testando2:', uid); 
    

    const [loading, setLoading] = useState(true);

    const onSuccessLogout = async (res) => {
      alert('Logout feito com sucesso!');
      history.push({pathname: '/'});
    };


  //console.log(data);
  //console.log(googleId);
  
  let history = useHistory();

  const isEven = number => number % 2 === 0;

  return (
      <ViewList>
        <div style={styles.divLogout}>
          <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={onSuccessLogout}
          >
          </GoogleLogout>
        </div>

        { /*loading ?
          <div style={styles.loading}>
            <Loader
              type="Oval"
              color="#00BFFF"
              height={100}
              width={100}
            />
          </div>
          :*/
          <div>
            <DivForm>Seus Formulários</DivForm>
              {data.map((item, index) => (
                  userId === uid && !item.uid2
                  ?
                  <div key={index}>
                    {/*console.log('uid no item:', item.uid)*/}
                    <QuestCard 
                        keyid={item.id}
                        title={item.title}
                        isFirstColumn={isEven(index)}
                        onNavigate={() => {history.push({pathname: '/questanswer', state: { dataItem: item}, state2: {uid2: uid }})}}
                    /> 
                  </div>
                  : null
              ))}
                
            <AddQuestCard   
              onNavigate={() => history.push('/')} 
            />
            <DivForm>Respostas dos formulários</DivForm>
              {data.map((item, index) => (
                  userId === uid && item.uid2
                  ?
                  <div key={index}>
                    <QuestCard 
                        keyid={item.data.id}
                        title={item.data.title}
                        isFirstColumn={isEven(index)}
                        onNavigate={() => {history.push({pathname: '/questanswer', state: { dataItem: item.data}, state2: {uid2: uid }, state3: {uid3: item }})}}
                    /> 
                  </div>
                  : null
                ))}

          </div>
        }   
      </ViewList>
  );
}

const styles = {
  loading: {
    backgroundColor: 'gray', 
    height: 873, 
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1, 
    flexDirection: 'column'
  },
  divLogout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    alignItems: 'flex-start', 
    padding: 10,
    paddingRight: 15,
    cursor: 'pointer'
  },
};