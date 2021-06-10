import styled from 'styled-components';

export const KeyboardAvoidingView = styled.div``;

export const ScrollViewMobile = styled.div`
    background-color: #5c8a8a;
    padding: 10px;
    width: 300px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    flex: 1;
    display: inline-block;
`;

export const ScrollViewDesktop = styled.div`
    background-color: #5c8a8a;
    padding: 10px;
    width: 500px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    flex: 1;
    display: inline-block;
`;

export const MainDivMobile = styled.div`
    background-color: #008b8b; 
    flex: 1; 
    padding-top: 20px; 
    padding-bottom: 20px;
`;

export const MainDivDesktop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #008b8b;
    flex: 1; 
    padding-top: 20px; 
    padding-bottom: 20px;
`;

export const TextInput = styled.input`
    background-color: #00000000;
    padding-left: 5px;
    flex: 1;
    padding: 0.5em;
    padding-right: 5px;
    padding-bottom: 5px;
    
    border-width: 2px;
    border-bottom-color: gray;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 3px;
    border-color: transparent;
    border-bottom-color: #999999;
    color: white;
    font-size: 17px;
    text-align: center;
    outline: none;
`;
export const TextInput2 = styled.input`
    background-color: #00000000;
    padding-left: 5px;
    flex: 1;
    padding: 0.5em;
    width: 400px;
    padding-right: 5px;
    padding-bottom: 5px;
    border-width: 2px;
    border-bottom-color: gray;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 3px;
    border-color: transparent;
    border-bottom-color: #999999;
    color: white;
    font-size: 17px;
    text-align: center;
    outline: none;
`;

export const TextArea = styled.textarea`
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
    outline: none;
    text-align: left; // alinha o texto do usuário
    margin-bottom: 20px;
    padding-top: 10px;
    ::placeholder {
        text-align: center; // alinha o placeholder
    }
    :placeholder-shown {
        text-align: left; //alinha o cursor
    }
`;

export const TextArea2 = styled.textarea`
    background-color: #00000000;
    padding-left: 5px;
    flex: 1;
    padding: 0.5em;
    padding-right: 5px;
    padding-bottom: 5px;
    height: 100px;
    width: 400px;
    border-width: 2px;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 3px;
    border-color: #999999;
    color: white;
    font-size: 17px;
    outline: none;
    text-align: left; // alinha o texto do usuário
    margin-bottom: 20px;
    padding-top: 10px;
    ::placeholder {
        text-align: center; // alinha o placeholder
    }
    :placeholder-shown {
        text-align: left; //alinha o cursor
    }
`;

export const ViewButton = styled.div`
    padding: 10px;
`;

export const Button = styled.button`
   align-self: stretch;
   justify-content: center;
   align-items: center;
`;

export const ButtonClean = styled(Button)``;

export const Text = styled.div`
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin: 20px 20px 30px 20px;
`;