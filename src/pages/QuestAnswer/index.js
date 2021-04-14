import React, { useState } from 'react';
import useViewport from '../../resources/responsive';

import { 
    ScrollView,
    ScrollView2,
    TextInput,
    TextInput2,
    TextArea,
    TextArea2, 
    ViewButton, 
    Text 
} from './styles';

import Button from '@material-ui/core/Button';

import FormRow from "../../components/FormRow";

import firebase from "@firebase/app";
import "@firebase/database";
import history from '../../History';
import { useLocation } from "react-router-dom";

export default function QuestList({ props }) {
    const location = useLocation();
    const { dataItem } = location.state;

    const [data, setData] = useState(dataItem);
    const uid = JSON.stringify(data.uid);

    
    const {uid2} = location.state2;
    //const  uid2  = location.state.dataItem.googleId;

    const [data2, setData2] = useState(uid2);
    console.log('olá:', data2);
    //const googleId = JSON.stringify(data2.googleId); //aqui eu separo o googleId em formato de string
    
    //const [data3, setData3] = useState(googleId); // aqui eu coloco o googleId dentro da variável googleId
    //console.log('test:', data3)

    const [nameError, setNameError] = useState('');

    //const datas = {...data, ...data3}; //pode ser um array ou object

    console.log(data);
    console.log(data2);

    //console.log('uid2:', JSON.stringify(data2.googleId));


    function handleUpdate() {
        if (data.creator.user.trim() === '') {
            setNameError(() => ('Necessário preencher o campo usuário.'));
        } else {
            setNameError(() => (null));
            const db = firebase.database();
            db
            .ref(`/questionnaires/`)
            .push({data, uid2: data2});
            history.push({pathname: 'redirect'});
        }
    }

    function handleRemove() {
        const db = firebase.database();
        db
        .ref(`/questionnaires/${data.id}`)
        .remove();
        history.push({pathname: 'redirect'});
    }

    /*function error() {
        if (data.creator.user.trim() === '') {
            setNameError(() => ('Necessário preencher o campo usuário.'));
        } else {
            setNameError(() => (null));
            const db = firebase.database();
            db
            .ref(`/questionnaires/`)
            .push({data, uid2: data2});
            history.push({pathname: 'questlist', state: {uid2: data2}});
        }
    }*/

    const { width } = useViewport();
    const breakpoint = 620;
    
    return (
        width < breakpoint ?
        <div style={{backgroundColor: '#595959', flex: 1}}>
            <ScrollView>
                <FormRow first>
                        <Text>{data.title}</Text>
                </FormRow>

                <FormRow>
                    <Text>{data.creator.creatorAuthor}</Text>
                    <TextInput
                        style={{marginBottom: 20}}
                        placeholderTextColor= '#808080'
                        value={data.creator.user}
                        onChange={(e) => setData({ ...data, creator: {...data.creator, user: e.target.value} })}
                        placeholder='Usuário'
                    />
                    {!!nameError && (
                        <Text style={{ color: 'red', textAlign: 'center', }}>{nameError}</Text>
                    )}
                </FormRow>

                <FormRow>
                    <Text>{data.date.dateCreator}</Text>
                    <TextInput
                        style={{marginBottom: 20}}
                        placeholderTextColor= '#808080'
                        value={data.date.dateUser}
                        onChange={(e) => setData({ ...data, date: {...data.date, dateUser: e.target.value} })}
                        placeholder='Data das repostas'        
                    />
                </FormRow>

                    {
                        data.customField.map((q, id) => (
                            <FormRow key={id}>
                                <Text>{q.quest}</Text>
                                <TextArea
                                    style={{marginBottom: 20}}
                                    placeholderTextColor= '#808080'
                                    value={q.ans}
                                    onChange={(e) => { 
                                        const updated = [...data.customField]; updated[id].ans = e.target.value; 
                                        setData({ ...data, customField: updated }); }
                                    }
                                    placeholder='Resposta'
                                />
                            </FormRow>
                                

                        ))
                    }

                <FormRow>
                    <Text>{data.latitude}</Text>
                    <Text>{data.longitude}</Text>
                </FormRow>

                <ViewButton>
                    <Button
                        style={{color: 'white', background: 'blue', height: 40, width: 80, marginTop: '5%', marginBottom: '5%'}}
                        onClick={() => {handleUpdate()}}
                    >Salvar</Button>
                </ViewButton>
                {
                    uid === data2
                    ?
                    <ViewButton>
                        <Button
                            style={{color: 'white', background: 'red', height: 40, width: 80, marginTop: '5%', marginBottom: '5%'}}
                            onClick={() => {handleRemove()}}
                        >Deletar</Button>
                    </ViewButton>
                    : null
                }    
                            
            </ScrollView>

        </div>

        :

        <div style={{backgroundColor: '#595959', flex: 1}}>
        <ScrollView2>
            <FormRow first>
                    <Text>{data.title}</Text>
            </FormRow>

            <FormRow>
                <Text>{data.creator.creatorAuthor}</Text>
                <TextInput2
                    style={{marginBottom: 20}}
                    placeholderTextColor= '#808080'
                    value={data.creator.user}
                    onChange={(e) => setData({ ...data, creator: {...data.creator, user: e.target.value} })}
                    placeholder='Usuário'
                />
                {!!nameError && (
                    <Text style={{ color: 'red', textAlign: 'center', }}>{nameError}</Text>
                )}
            </FormRow>

            <FormRow>
                <Text>{data.date.dateCreator}</Text>
                <TextInput2
                    style={{marginBottom: 20}}
                    placeholderTextColor= '#808080'
                    value={data.date.dateUser}
                    onChange={(e) => setData({ ...data, date: {...data.date, dateUser: e.target.value} })}
                    placeholder='Data das repostas'              
                />
            </FormRow>

                {
                    data.customField.map((q, id) => (
                        <FormRow key={id}>
                            <Text>{q.quest}</Text>
                            <TextArea2
                                style={{marginBottom: 20}}
                                placeholderTextColor= '#808080'
                                value={q.ans}
                                onChange={(e) => { 
                                    const updated = [...data.customField]; updated[id].ans = e.target.value; 
                                    setData({ ...data, customField: updated }); }
                                }
                                placeholder='Resposta'
                            />
                        </FormRow>
                            

                    ))
                }

            <FormRow>
                <Text style={{paddingRight: 26}}>Latitude: {data.latitude}</Text>
                <Text>Longitude: {data.longitude}</Text>
            </FormRow>

            <ViewButton>
                <Button
                    style={{color: 'white', background: 'blue', height: 40, width: 80, marginTop: '5%', marginBottom: '5%'}}
                    onClick={() => {handleUpdate()}}
                >Salvar</Button>
            </ViewButton>
            {
            uid === data2
            ?
            <ViewButton>
                <Button
                    style={{color: 'white', background: 'red', height: 40, width: 80, marginTop: '5%', marginBottom: '5%'}}
                    onClick={() => {handleRemove()}}
                >Deletar</Button>
            </ViewButton>
            : null
            }           
        </ScrollView2>

    </div>           
    );
}