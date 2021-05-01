import styled from 'styled-components';


export const AddQuestsCard = styled.button`
    width: ${props => (props.width < props.breakpoint ? '53%' : '22%')};
    padding: ${props => (props.isFirstColumn ? '5px 5px 5px 10px' : '5px 10px 5px 5px')};
    background-color: transparent;
    border: transparent;
    margin-top: 7%;
    margin-bottom: 2%;
    cursor: pointer;
    outline: none;
`;

export const Card = styled.div`
    height: 97%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardText = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2%;
`;

export const Image = styled.img`
    width: 26%;
    height: 26%;
`;

export const Text = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: ${props => (props.width < props.breakpoint ? '17px' : '20px')};
`;