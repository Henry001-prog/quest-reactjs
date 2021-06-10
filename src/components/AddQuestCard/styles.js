import styled from 'styled-components';


export const AddQuestsCard = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => (props.width < props.breakpoint ? '53%' : '22%')};
    padding: ${props => (props.isFirstColumn ? '5px 5px 5px 10px' : '5px 10px 5px 5px')};
    background-color: transparent;
    border: transparent;
    margin-top: 40%;
    margin-bottom: 8%;
    cursor: pointer;
    outline: none;
`;

export const Card = styled.div`
    display: flex;
    height: 97%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2%;
`;

export const Image = styled.img`
    display: flex;
    width: 100px;
    height: 26%;
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: ${props => (props.width < props.breakpoint ? '17px' : '20px')};
`;