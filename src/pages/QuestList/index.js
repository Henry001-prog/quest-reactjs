import React, { useState, useEffect } from 'react';
import { ViewList } from './styles';
import QuestCard from '../../components/QuestCard';
import AddQuestCard from '../../components/AddQuestCard';

import firebase from '@firebase/app';
import '@firebase/database';
import history from '../../History';

export default function QuestList({ navigation }) {
    //const title = navigation.getParam('title');
    //const [creatorAuthor, setCreatorAuthor] = useState('');
    //const [user, setUser] = useState('');
    //const [dateCreator, setDateCreator] = useState('');
    //const [dateUser, setDateUser] = useState('');
   // const [customFields, setCustomFields] = useState([{}]);
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

  console.log(data);
    

  const isEven = number => number % 2 === 0;

  return (
      <ViewList>
            {data.map((item, index) => (
              item.creator.user.trim() === ''
              ?
              <div>
                <QuestCard 
                    title={item.title}
                    isFirstColumn={isEven(index)}
                    onNavigate={() => history.push('/questanswer', { dataItem: item })}
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