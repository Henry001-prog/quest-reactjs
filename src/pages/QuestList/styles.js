import styled from 'styled-components';
import FlatList from 'flatlist-react';


export const ViewList = styled.div`
    flex: 1;
    background-color: lightblue;
    height: 100%;
`;

export const ScrollList = styled(FlatList)``;

export const ViewTop = styled.div`
    margin-top: 5px;
`;

export const ViewBottom = styled.div`
    margin-bottom: 5px;
`;

export const ViewButton = styled.div`
    display: flex;
    flex: 1;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
`;

export const Button1 = styled.button`
   display: flex;
   flex-direction: column;
   width: 300px;
   height: 60px;
   border-radius: 25px;
   border: 1px solid transparent;
   color: white;
   align-self: stretch;
   justify-content: center;
   background-color: blue;
   align-items: center;
   font-size: 16px;
   cursor: pointer;
   margin-top: 3%;
   margin-bottom: 3%;
   text-align: center;
   font-weight: bold;
   font-family: Oswald;
`;