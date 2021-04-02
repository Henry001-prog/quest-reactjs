import styled from 'styled-components';

export const InputArea = styled.textarea`
    background-color: #00000000;
    padding-left: 5px;
    flex: 1;
    padding: 0.5em;
    padding-right: 5px;
    padding-bottom: 5px;
    height: 100px;
    border-width: 2px;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 3px;
    border-color: #999999;
    color: white;
    font-size: 17px;
    text-align: left; // alinha o texto do usuário
    ::placeholder {
        text-align: center; // alinha o placeholder
    }
    :placeholder-shown {
        text-align: left; //alinha o cursor
    }
`;