import React, { useState, useEffect } from "react";
import FormRow from '../../components/FormRow';
import Button from '@material-ui/core/Button';

import history from '../../History';

import firebase from '@firebase/app';
import '@firebase/database';
import { geolocated } from 'react-geolocated';

import { 
    ScrollView,
    ScrollView2, 
    TextInput,
    TextInput2,
    ViewButton, 
    Button1,
    Text,
    TextArea,
    TextArea2,
} from './styles';

export default function Questionnaire( props, coords ) {

    
    const [title, setTitle] = useState('');
    const [creatorAuthor, setCreatorAuthor] = useState('');
    const [user, setUser] = useState('');
    const [dateCreator, setDateCreator] = useState('');
    const [dateUser, setDateUser] = useState('');
    //const [customFields, setCustomFields] = useState([]);
    const [nameError, setNameError] = useState('');
    const [nameError2, setNameError2] = useState('');
    const [nameError3, setNameError3] = useState('');
    //const [nameError4, setNameError4] = useState('');
    //const [nameError5, setNameError5] = useState('');
    const [question, setQuestion] = useState('');
    const [latitude, setLat] = useState('');
    const [longitude, setLongitude] = useState('');
    //const [answer, setAnswer] = useState('');
    //const [location, setLocation] = useState();
    //const [latitude, setLatitude] = useState('');
    //const [longitude, setLongitude] = useState('');
    //const [errorMsg, setErrorMsg] = useState(null);
    //const [test, setTest] = useState({});
    
   

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
        /*else if(questions.quests.trim() === '') {
            setNameError4(() => ('Necessário preencher o campo pergunta.'));
        }*/
        else {
            const db = firebase.database();
            db
            .ref(`/questionnaires/`)
            .push({
                title: title,
                creator: {creatorAuthor, user},
                date: {dateCreator, dateUser},
                customField: questions,
                //latitude: text,
                //longitude: text2
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
            history.push('/questlist');
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
    
    const blankQuest = { quests: '', ans: '' };

    const [questions, setQuestions] = useState([
        {...blankQuest}
    ]);

    function OnCustomInputNameHandler(value, index, className) {
        const updatedQuest = [...questions];
        updatedQuest[index].quests = value;
        setQuestions(updatedQuest);
        setQuestion(updatedQuest)
        //console.log(questions)
    }

    function OnCustomInputKeyHandler(value, index, className) {
        const updatedQuest2 = [...questions];
        updatedQuest2[index].ans = value;
        setQuestions(updatedQuest2);
        //console.log(questions)
    }

    function remove() {
        setQuestions(questions.splice(0,questions.length-1))
    };

    console.log(title);
    console.log(creatorAuthor);
    console.log(user);
    console.log(dateCreator);
    console.log(dateUser);
    console.log(questions);

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
        setLat(latitude);
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
        <div style={{backgroundColor: '#595959'}}>
            <ScrollView>
                <FormRow first>
                    <TextInput 
                        style={{marginBottom: 20, paddingTop: 10}}
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Título'
                        multiline={true}
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
                                onChange={(e) => setCreatorAuthor(e.target.value)}
                                placeholder='Autor'
                                multiline={true}
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
                            multiline={true}
                            defaultValue={(user ??{})}
                        />
                    </FormRow>

                    <FormRow>
                        <div>
                            <TextInput 
                                style={{marginBottom: 20, paddingTop: 10}}
                                type='text'
                                value={dateCreator} 
                                onChange={(e) => setDateCreator(e.target.value)}
                                placeholder='Data de criação do formulário'
                                multiline={true}
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
                                    multiline={true}
                                />
                            </div>
                    </FormRow>

                    {
                        questions.map((customInput, key) => {

                            return(
                                <FormRow key={key}>
                                        <TextArea 
                                            style={{marginBottom: 20, paddingTop: 10}}
                                            placeholderTextColor= '#808080'
                                            value={customInput.key} 
                                            onChangeText={(name, className) => {OnCustomInputNameHandler(name, key, className)}}
                                            placeholder='Pergunta'
                                            multiline={true}
                                            className='quest'
                                            dataIndex={key}
                                        />
                                        <br/>
                                        {/*!!nameError4 && (
                                            <Text style={{ color: 'red', textAlign: 'center', }}>{nameError4}</Text>
                                        )*/}
                                        <TextArea 
                                            style={{marginBottom: 20, paddingTop: 10}}
                                            placeholderTextColor= '#808080'
                                            value={customInput.key}
                                            onChangeText={(value, className) => {OnCustomInputKeyHandler(value)}}
                                            placeholder='Resposta'
                                            multiline={true}
                                            className='ans'
                                            dataIndex={key}
                                        />
                                    <ViewButton>
                                        <Button title='Delete' style={{color: 'white', background: '#FF0004'}} onClick={() => {remove()}}>Remover</Button>
                                    </ViewButton>
                                </FormRow>
                            )
                        })
                    }
                    <ViewButton>
                        <Button1
                            title='Criar Campo'
                            onClick={() => {addInput()}}
                        >Criar Campo</Button1>
                    </ViewButton>

                    <FormRow>
                        
                        <Text>{`Latitude: ${latitude}`} </Text>
                        <Text>{`Longitude: ${longitude}`}</Text>
                        
                    </FormRow>

                    <ViewButton>
                        <Button
                            title='Salvar'
                            style={{color: 'white', background: 'blue'}}
                            onClick={() => {handleSubmit()}}
                        >Salvar</Button>
                    </ViewButton>
                        
            </ScrollView>
        </div>
        :
        <div style={{backgroundColor: '#595959', height: '100%', flex: 1}}>
            <ScrollView2>
                <FormRow first>
                    <TextInput2 
                        style={{marginBottom: 20, paddingTop: 10}}
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Título'
                        multiline={true}
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
                                onChange={(e) => setCreatorAuthor(e.target.value)}
                                placeholder='Autor'
                                multiline={true}
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
                            multiline={true}
                            defaultValue={(user ??{})}
                        />
                    </FormRow>

                    <FormRow>
                        <div>
                            <TextInput2 
                                style={{marginBottom: 20, paddingTop: 10}}
                                type='text'
                                value={dateCreator} 
                                onChange={(e) => setDateCreator(e.target.value)}
                                placeholder='Data de criação do formulário'
                                multiline={true}
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
                                    multiline={true}
                                />
                            </div>
                    </FormRow>

                    {
                        questions.map((customInput, key) => {

                            return(
                                <FormRow key={key}>
                                        <TextArea2 
                                            style={{marginBottom: 20, paddingTop: 10}}
                                            placeholderTextColor= '#808080'
                                            value={customInput.key} 
                                            onChangeText={(name, className) => {OnCustomInputNameHandler(name, key, className)}}
                                            placeholder='Pergunta'
                                            multiline={true}
                                            className='quest'
                                            dataIndex={key}
                                        />
                                        <br/>
                                        {/*!!nameError4 && (
                                            <Text style={{ color: 'red', textAlign: 'center', }}>{nameError4}</Text>
                                        )*/}
                                        <TextArea2 
                                            style={{marginBottom: 20, paddingTop: 10}}
                                            placeholderTextColor= '#808080'
                                            value={customInput.key}
                                            onChangeText={(value, className) => {OnCustomInputKeyHandler(value)}}
                                            placeholder='Resposta'
                                            multiline={true}
                                            className='ans'
                                            dataIndex={key}
                                        />
                                    <ViewButton>
                                        <Button title='Delete' style={{color: 'white', background: '#FF0004'}} onClick={() => remove()}>Remover</Button>
                                    </ViewButton>
                                </FormRow>
                            )
                        })
                    }
                    <ViewButton>
                        <Button1
                            title='Criar Campo'
                            onClick={() => {addInput()}}
                        >Criar Campo</Button1>
                    </ViewButton>

                    <FormRow>
                        
                        <Text style={{paddingRight: 26}}>{`Latitude: ${latitude}`} </Text>
                        <Text>{`Longitude: ${longitude}`}</Text>
                        
                    </FormRow>

                    <ViewButton>
                        <Button
                            title='Salvar'
                            style={{color: 'white', background: 'blue'}}
                            onClick={() => {handleSubmit()}}
                        >Salvar</Button>
                    </ViewButton>
                        
            </ScrollView2>
        </div>
    );
}

