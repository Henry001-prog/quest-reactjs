import styled from 'styled-components';


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

export const Button1 = styled.button`
   flex: 1;
   width: 82px;
   height: 45px;
   border-radius: 5px;
   border: 1px solid transparent;
   color: white;
   align-self: stretch;
   justify-content: center;
   background-color: blue;
   align-items: center;
   font-size: 14px;
   cursor: pointer;
   margin-top: 3%;
   margin-bottom: 3%;
`;

export const ButtonClean = styled(Button1)``;

export const Text = styled.div`
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin: 20px 20px 30px 20px;
`;