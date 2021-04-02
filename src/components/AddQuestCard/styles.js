import styled from 'styled-components';


export const AddQuestsCard = styled.button`
    width: 30%;
    padding: ${props => (props.isFirstColumn ? '5px 5px 5px 10px' : '5px 10px 5px 5px')};
    background-color: transparent;
    border: transparent;
    margin-top: 8%;
    margin-bottom: 2%;
    cursor: pointer;
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
    font-size: 17px;
`;