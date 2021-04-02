import styled from 'styled-components';
import Form from '../../resources/imgs/form-icon.png';

export const QuestsCard = styled.button`
    width: 20%;
    padding: ${props => (props.isFirstColumn ? '5px 10px 5px 10px' : '5px 10px 5px 10px')};
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 5%;
    margin-left: 5%;
    background-color: SlateGray;
    cursor: pointer;
`;

export const QuestCardMobile = styled(QuestsCard)`
    width: 30%;
`;

export const Card = styled.div`
    border-width: 2px;
    border-color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    
`;

export const Card2 = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
    flex: 1;
`;

export const Image = styled.img.attrs(props => ({
    src: Form,
}))`
    align-items: center;
    justify-content: center;
    
    width: 100%;
`;

export const CardTitleWrapper = styled.div`
    background-color: black;
    height: 50px;
    
    justify-content: center;
    opacity: .6;
    width: 100%;
    align-items: center;
    padding: 10px 3px 10px 3px;
`;

export const CardTitle = styled.div`
    color: white;
    font-size: 15px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: center;
`;