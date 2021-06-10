import React, { useState, useEffect } from 'react';
import { ViewList, ViewButton, Button1, Div, DivButton, Div2 } from './styles';
import QuestCard from '../../components/QuestCard';
import AddQuestCard from '../../components/AddQuestCard';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import firebase from '@firebase/app';
import '@firebase/database';
//import history from '../../History';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Loader from "react-loader-spinner";

export default function QuestList({ navigation }) {
    //const title = navigation.getParam('title');
    //const [creatorAuthor, setCreatorAuthor] = useState('');
    //const [user, setUser] = useState('');
    //const [dateCreator, setDateCreator] = useState('');
    //const [dateUser, setDateUser] = useState('');
    // const [customFields, setCustomFields] = useState([{}]);
    const location = useLocation();
    const { uid2 } = location.state;
    //const { dataRedirect } = location.state2;
    //console.log('teste:', uid2)

    const clientId = '625117253701-s8cmkt6i5k86un937u4dp5ulbf0bl11b.apps.googleusercontent.com';

    const [data3, setData3] = useState(uid2);
    console.log('testando:', data3);
    const uid = JSON.stringify(data3.googleId); //aqui eu separo o googleId em formato de string
    console.log('string:', uid);
    const [googleId, setGoogleId] = useState(uid);
     
    console.log('testando2:', googleId); 
    

    const [data, setData] = useState([]);
    //const [dataList, setDataList] = useState(dataRedirect);

    const [loading, setLoading] = useState(true);

    const onSuccessLogout = async (res) => {
      alert('Logout feito com sucesso!');
      history.push({pathname: '/'});
    };

    useEffect(() => {
      let unmounted = false;
      async function Db() {
      const db = firebase.database();
      if (!unmounted) {
        db.ref('/questionnaires/')
        .on('value', snapshot => {
          
          //const response = snapshot.val();
          //console.log('value', snapshot.val());
          const response = snapshot.val();
          //console.log(response);
          const keys = Object.keys(response);
          const questWithKeys = keys.map(id => {
          return { ...response[id], id }
          });
          setData(questWithKeys);
          setLoading(false);
          
          //const values = Object.values(response);

          /*const questions = values.filter(data2 => data2.customField)
                                  .map((res) => res.customField)
                                  .flat(Infinity);

          setData2({ ...data2, questions: [...questions] });*/
          //console.log(questWithKeys); 
          //return { data: questWithKeys };
              
        
        });
      }
    }
    Db();

      return () => { unmounted = true };
      
    
  }, []);

  console.log('Dados do Firebase:', data);
  //console.log('Dados do Redirect:', dataList);
  console.log('uid:', googleId);
  
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

        { loading ?
          <div style={styles.loading}>
            <Loader
              type="Oval"
              color="#00BFFF"
              height={100}
              width={100}
            />
          </div>
          :
          <>
            <DivButton>
              {data.map((item, index) => (
                  !item.uid2
                  ?
                  <Div2 key={index}>
                    <QuestCard 
                        keyid={item.id}
                        title={item.title}
                        isFirstColumn={isEven(index)}
                        onNavigate={() => {history.push({pathname: '/questanswer', state: { dataItem: item}, state2: {uid2: googleId }})}}
                    /> 
                  </Div2>
                  : null
                ))}
            </DivButton>
            <Div>
              <ViewButton>
                <Button1
                  onClick={() => history.push({pathname: '/myquests', state: { items: data }, state2: { uid2: googleId }})}
                >Exibir seus formulários e as respostas</Button1>
              </ViewButton>    
              <AddQuestCard   
                  onNavigate={() => history.push({pathname: '/questionnaire', state: { dataItem: data3 }})}
                  title={"Criar questionário"} 
              />
            </Div>
          </>
        }   
      </ViewList>
  );
}

const styles = {
  loading: { 
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1,
    height: '100vh', 
    width: '100%',
  },
  divLogout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    alignItems: 'flex-start', 
    flexWrap: 'wrap',
    padding: 10,
    margin: 0,
    paddingRight: 15,
  },
};