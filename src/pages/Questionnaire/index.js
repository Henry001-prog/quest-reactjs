import React, { useState, useEffect } from "react";
import FormRow from '../../components/FormRow';
import Button from '@material-ui/core/Button';

import history from '../../History';
import { useLocation } from "react-router-dom";

import firebase from '@firebase/app';
import '@firebase/database';
import { geolocated } from 'react-geolocated';

import {
    ScrollViewDesktop,
    TextInput,
    TextInput2,
    ViewButton, 
    Button1,
    Text,
    ScrollViewMobile,
    TextArea,
    TextArea2,
} from './styles';

export default function Questionnaire( props, coords ) {

    
    const location = useLocation();
    const { dataItem } = location.state;

    const [data, setData] = useState(dataItem);
    //console.log('Dados:', data);

    const [title, setTitle] = useState('');
    const [creatorAuthor, setCreatorAuthor] = useState('');
    const [user, setUser] = useState('');
    const [dateCreator, setDateCreator] = useState('');
    const [dateUser, setDateUser] = useState('');
    //const [customFields, setCustomFields] = useState([]);
    const [nameError, setNameError] = useState('');
    const [nameError2, setNameError2] = useState('');
    const [nameError3, setNameError3] = useState('');
    const [nameError4, setNameError4] = useState('');
    //const [nameError5, setNameError5] = useState('');
    //const [question, setQuestion] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    
   console.log(data);

   /*function handleSubmit() {
        const db = firebase.database();
            db
            .ref(`/questionnaires/`)
            .push({
                title: title,
                creator: {creatorAuthor, user},
                date: {dateCreator, dateUser},
                customField: questions,
                latitude: text,
                longitude: text2
            });
            
            //setLatitude('');
            //setLongitude('');
            //navigation.navigate('QuestList', { title, creatorAuthor, user, dateCreator, dateUser, customFields });
            
    }*/

    function handleSubmit() {
        if (title.trim() === '') {
            setNameError(() => ('Necessário preencher o campo título.'));
        
        } else if(creatorAuthor.trim() === '') {
            setNameError2(() => ('Necessário preencher o campo autor.'));

        } else if(dateCreator.trim() === '') {
            setNameError3(() => ('Necessário preencher o campo data do formulário.'));
        }
        /*else if(questions.quest.trim() === '') {
            setNameError4(() => ('Necessário preencher o campo pergunta.'));
        }*/
        else {
            const db = firebase.database();
            db
            .ref(`/questionnaires/`)
            .push({
                uid: data.googleId,
                title: title,
                creator: {creatorAuthor, user},
                date: {dateCreator, dateUser},
                customField: questions,
                latitude: latitude,
                longitude: longitude
            });
            setNameError(() => (null));
            setNameError2(() => (null));
            setNameError3(() => (null));
            //setNameError4(() => (null));
            //setNameError5(() => (null));
            setTitle('');
            setCreatorAuthor('');
            setUser('');
            setDateCreator('');
            setDateUser('');
            //setCustomFields([]);
            setQuestions([]);
            history.push({pathname: '/questlist', state: {uid2: data}});
        }
    }

    useEffect(() => {
        const firebaseConfig = {
            //Because they are private data, Firebase settings was removed
            apiKey: "AIzaSyCTUfKkvRJELnkwF73616DXoKsuN-x45N0",
            authDomain: "agro-492f4.firebaseapp.com",
            databaseURL: "https://agro-492f4-default-rtdb.firebaseio.com",
            projectId: "agro-492f4",
            storageBucket: "agro-492f4.appspot.com",
            messagingSenderId: "201950875889",
            appId: "1:201950875889:web:2994d64873dfba94399950",
            measurementId: "G-D08565YT91"
          };
          // Initialize Firebase
          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }
          //firebase.analytics();
    })


    function addInput() {
        setQuestions([...questions, {...blankQuest}]);
    }
    
    const blankQuest = { quest: '', ans: '' };

    const [questions, setQuestions] = useState([
        {...blankQuest}
    ]);
    

    const handleQuestChange = (e) => {
    const updatedQuest = [...questions];
    updatedQuest[e.target.dataset.idx][e.target.className] = e.target.value;
    console.log(updatedQuest);
    setQuestions(updatedQuest);
    };

    /*function OnCustomInputNameHandler(e, index, className) {
        const updatedQuest = [...questions];
        updatedQuest[e.target.dataset.key][e.target.className] = e.target.value;
        
        setQuestions(updatedQuest);
        console.log(questions)
        setQuestion(updatedQuest)
        //console.log(questions)
    }

    function OnCustomInputKeyHandler(value, index, className) {
        const updatedQuest2 = [...questions];
        updatedQuest2[index].ans = value;
        setQuestions(updatedQuest2);
        //console.log(questions)
    }*/

    function remove() {
        setQuestions(questions.splice(0,questions.length-1))
    };

    //console.log(title);
    //console.log(creatorAuthor);
    //console.log(user);
    //console.log(dateCreator);
    //console.log(dateUser);
    //console.log(questions);

    /*function onChangeHandler(event) {
        setTitle(event.target.value);
    };*/

    geolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    })(Questionnaire);

    useEffect(() => {
        if ("geolocation" in navigator) {
            console.log("Available");
          } else {
            console.log("Not Available");
          }
        navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        let latitude =  position.coords.latitude;
        let longitude =  position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
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


    return (
        width < breakpoint ? 
        <div style={{backgroundColor: '#008b8b', paddingTop: 20, paddingBottom: 20}}>
            <ScrollViewMobile>
                <FormRow first>
                    <TextInput 
                        style={{marginBottom: 20, paddingTop: 10}}
                        type='text'
                        value={title}
                        onChange={(e) => {setTitle(e.target.value); setNameError('')}}
                        placeholder='Título'
                    />
                    {!!nameError && (
                        <Text style={{ color: 'red', textAlign: 'center', }}>{nameError}</Text>
                    )}
                    </FormRow>

                    <FormRow>
                        <TextInput 
                                style={{marginBottom: 20, paddingTop: 10}}
                                type='text'
                                value={creatorAuthor}
                                onChange={(e) => {setCreatorAuthor(e.target.value); setNameError2('')}}
                                placeholder='Autor'
                        />
                        <br/>
                        {!!nameError2 && (
                            <Text style={{ color: 'red', textAlign: 'center', }}>{nameError2}</Text>
                        )}
                        <TextInput 
                            style={{marginBottom: 20}}
                            placeholderTextColor= '#808080'
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder='Usuário'
                            defaultValue={(user ??{})}
                        />
                    </FormRow>

                    <FormRow>
                        <div>
                            <TextInput 
                                style={{marginBottom: 20, paddingTop: 10}}
                                type='text'
                                value={dateCreator} 
                                onChange={(e) => {setDateCreator(e.target.value); setNameError3('')}}
                                placeholder='Data do formulário'
                            />
                            {!!nameError3 && (
                                <Text style={{ color: 'red', textAlign: 'center', }}>{nameError3}</Text>
                            )}
                        </div>
                            <div>
                                <TextInput
                                    style={{marginBottom: 20}}
                                    type='text'
                                    value={dateUser}
                                    onChange={(e) => setDateUser(e.target.value)}
                                    placeholder='Data das repostas'
                                />
                            </div>
                    </FormRow>
                    
                    {
                        questions.map((val, idx) => {
                            const questId = `quest-${idx}`;
                            const ansId = `ans-${idx}`;
                            return (
                            <FormRow key={`quest-${idx}`}>
                                {!!nameError4 && (
                                    <Text style={{ color: 'red', textAlign: 'center', }}>{nameError4}</Text>
                                )}
                                <input
                                    style={styles.textarea}
                                    placeholder="Pergunta"
                                    name={questId}
                                    data-idx={idx}
                                    id={questId}
                                    className="quest" 
                                    value={questions[idx].quest}
                                    onChange={handleQuestChange}
                                />
                                
                                <input
                                    style={styles.textarea}
                                    placeholder="Resposta"
                                    type="text"
                                    name={ansId}
                                    data-idx={idx}
                                    id={ansId}
                                    className="ans"
                                    value={questions[idx].ans}
                                    onChange={handleQuestChange}
                                />
                                <ViewButton>
                                    <Button style={{color: 'white', background: '#FF0004'}} onClick={() => {remove()}}>Remover</Button>
                                </ViewButton>
                            </FormRow>
                            );      
                        })
                    }
                    
                    <ViewButton>
                        <Button1
                            onClick={() => {addInput()}}
                        >Criar Campo</Button1>
                    </ViewButton>

                    

                    <FormRow>
                        
                        <Text style={{paddingRight: 26}}>{`Latitude: ${latitude}`} </Text>
                        <Text>{`Longitude: ${longitude}`}</Text>
                        
                    </FormRow>

                    <ViewButton>
                        <Button
                            style={{color: 'white', background: 'blue', marginTop: '3%', marginBottom: '3%'}}
                            onClick={() => {handleSubmit()}}
                        >Salvar</Button>
                    </ViewButton>
                        
            </ScrollViewMobile>
        </div>

        :
        <div style={{backgroundColor: '#008b8b', height: '100%', flex: 1, paddingTop: 20, paddingBottom: 20}}>
            <ScrollViewDesktop>
                <FormRow first>
                    <TextInput2 
                        style={{marginBottom: 20, paddingTop: 10}}
                        type='text'
                        value={title}
                        onChange={(e) => {setTitle(e.target.value); setNameError('')}}
                        placeholder='Título'
                    />
                    {!!nameError && (
                        <Text style={{ color: 'red', textAlign: 'center', }}>{nameError}</Text>
                    )}
                    </FormRow>

                    <FormRow>
                        <TextInput2 
                                style={{marginBottom: 20, paddingTop: 10}}
                                type='text'
                                value={creatorAuthor}
                                onChange={(e) => {setCreatorAuthor(e.target.value); setNameError2('')}}
                                placeholder='Autor'
                        />
                        <br/>
                        {!!nameError2 && (
                            <Text style={{ color: 'red', textAlign: 'center', }}>{nameError2}</Text>
                        )}
                        <TextInput2 
                            style={{marginBottom: 20}}
                            placeholderTextColor= '#808080'
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder='Usuário'
                            defaultValue={(user ??{})}
                        />
                    </FormRow>

                    <FormRow>
                        <div>
                            <TextInput2 
                                style={{marginBottom: 20, paddingTop: 10}}
                                type='text'
                                value={dateCreator} 
                                onChange={(e) => {setDateCreator(e.target.value); setNameError3('')}}
                                placeholder='Data do formulário'
                            />
                            {!!nameError3 && (
                                <Text style={{ color: 'red', textAlign: 'center', }}>{nameError3}</Text>
                            )}
                        </div>
                            <div>
                                <TextInput2
                                    style={{marginBottom: 20}}
                                    type='text'
                                    value={dateUser}
                                    onChange={(e) => setDateUser(e.target.value)}
                                    placeholder='Data das repostas'
                                />
                            </div>
                    </FormRow>

                    {
                        questions.map((val, idx) => {
                            const quest = `quest-${idx}`;
                            const ans = `ans-${idx}`;
                            return (
                            <FormRow key={`quest-${idx}`}>
                                <input
                                    style={styles.textarea2}
                                    placeholder="Pergunta"
                                    name={quest}
                                    data-idx={idx}
                                    id={quest}
                                    className="quest" 
                                    value={questions[idx].quest}
                                    onChange={handleQuestChange}
                                />
                                
                                <input
                                    style={styles.textarea2}
                                    placeholder="Resposta"
                                    type="text"
                                    name={ans}
                                    data-idx={idx}
                                    id={ans}
                                    className="ans"
                                    value={questions[idx].ans}
                                    onChange={handleQuestChange}
                                />
                                <ViewButton>
                                    <Button style={{color: 'white', background: '#FF0004'}} onClick={() => {remove()}}>Remover</Button>
                                </ViewButton>
                            </FormRow>
                            );      
                        })
                    }
                    
                    <ViewButton>
                        <Button1
                            onClick={() => {addInput()}}
                        >Criar Campo</Button1>
                    </ViewButton>


                    <FormRow>
                        
                        <Text style={{paddingRight: 26}}>{`Latitude: ${latitude}`} </Text>
                        <Text>{`Longitude: ${longitude}`}</Text>
                        
                    </FormRow>

                    <ViewButton>
                        <Button
                            style={{color: 'white', background: 'blue', marginTop: '3%', marginBottom: '3%', height: 40, width: 80}}
                            onClick={() => {handleSubmit()}}
                        >Salvar</Button>
                    </ViewButton>
                        
            </ScrollViewDesktop>
        </div>
    );
}



const styles = {
    textarea: {
        backgroundColor: '#00000000',
        paddingLeft: '5px',
        flex: 1,
        padding: '0.5em',
        paddingRight: '5px',
        paddingBottom: '5px',
        height: '100px',
        borderWidth: '2px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '3px',
        borderColor: 'white',
        color: 'white',
        fontSize: '17px',
        outline: 'none',
        textAlign: 'center',
        marginBottom: 20, 
        paddingTop: 10,
    },
    textarea2: {
        backgroundColor: '#00000000',
        paddingLeft: '5px',
        flex: 1,
        padding: '0.5em',
        paddingRight: '5px',
        paddingBottom: '5px',
        height: '100px',
        width: '400px',
        borderWidth: '2px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '3px',
        borderColor: 'white',
        color: 'white',
        fontSize: '17px',
        outline: 'none',
        textAlign: 'center',
        marginBottom: 20, 
        paddingTop: 10,
    }
};

