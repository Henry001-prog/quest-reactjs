import React, { useState, useEffect } from 'react';
import { ViewList } from './styles';
import QuestCard from '../../components/QuestCard';
import AddQuestCard from '../../components/AddQuestCard';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import firebase from '@firebase/app';
import '@firebase/database';
//import history from '../../History';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function QuestList({ navigation }) {
    //const title = navigation.getParam('title');
    //const [creatorAuthor, setCreatorAuthor] = useState('');
    //const [user, setUser] = useState('');
    //const [dateCreator, setDateCreator] = useState('');
    //const [dateUser, setDateUser] = useState('');
    // const [customFields, setCustomFields] = useState([{}]);
    const location = useLocation();
    const { uid2 } = location.state;
    //console.log('teste:', uid2)

    const [googleId, setGoogleId] = useState(uid2);

    const [data, setData] = useState([]);

    //const [active, setActive] = useState(false);

    useEffect(() => {
      const db = firebase.database();
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
          //const values = Object.values(response);

          /*const questions = values.filter(data2 => data2.customField)
                                  .map((res) => res.customField)
                                  .flat(Infinity);

          setData2({ ...data2, questions: [...questions] });*/
          //console.log(questWithKeys); 
          //return { data: questWithKeys };
              
        
        });
    
  }, []);

  //console.log(data);
  console.log(googleId);
  
  let history = useHistory();

  const isEven = number => number % 2 === 0;

  return (
      <ViewList>
            {data.map((item, index) => (
              !item.uid2
              ?
              <div>
                <QuestCard 
                    key={index}
                    title={item.title}
                    isFirstColumn={isEven(index)}
                    onNavigate={() => history.push({pathname: '/questanswer', state: { dataItem: item}, state2: {uid2: googleId }})}
                /> 
              </div>
              : null
            ))}
            
        <AddQuestCard   
          onNavigate={() => history.push('/')} 
        />
      </ViewList>
  );
}