import React, { useState, useEffect } from "react";
import { ViewList, ScrollList, ViewTop, ViewBottom } from './styles';
import QuestCard from '../../components/QuestCard';
import AddQuestCard from '../../components/AddQuestCard';
import QuestCardMobile from '../../components/QuestCardMobile';

import firebase from '@firebase/app';
import '@firebase/database';

export default function QuestList({ navigation }) {
    //const title = navigation.getParam('title');
    //const [creatorAuthor, setCreatorAuthor] = useState('');
    //const [user, setUser] = useState('');
    //const [dateCreator, setDateCreator] = useState('');
    //const [dateUser, setDateUser] = useState('');
   // const [customFields, setCustomFields] = useState([{}]);
    const [data, setData] = useState([]);
    /*const [data2, setData2] = useState({
      questions: []
    });*/

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

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);

      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

      console.log(data);
    

    const isEven = number => number % 2 === 0;

    return (
        width < breakpoint ?
        <ViewList>
          
             {data.map((item, index) => (
               item.creator.user.trim() === ''
               ?
               <div>
                  <QuestCardMobile 
                    quest={item}
                    isFirstColumn={isEven(index)}
                    onNavigate={() => navigation.navigate('QuestAnswer', { dataItem: item })}
                  /> 
               </div>
               : null
                  
             ))}
          
          <AddQuestCard   
            onNavigate={() => navigation.navigate('Main')} 
          />
          </ViewList>
          :

          <ViewList>
          
             {data.map((item, index) => (
               item.creator.user.trim() === ''
               ?
               <div>
                  <QuestCard 
                    quest={item}
                    isFirstColumn={isEven(index)}
                    onNavigate={() => navigation.navigate('QuestAnswer', { dataItem: item })}
                  /> 
               </div>
               : null
                  
             ))}
          
          <AddQuestCard   
            onNavigate={() => navigation.navigate('Main')} 
          />
          </ViewList>
    );
}