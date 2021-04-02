import styled from 'styled-components';

export const Container = styled.div.attrs({
    elevation: 1,
})`
    padding: 10px;
    margin: 5px 5px 5px 5px;
    margin-top: ${props => (props.first ? '15px' : '10px')};
    margin-bottom: ${props => (props.last ? '15px' : '10px')};
    align-items: center;
    justify-content: center;
    background-color: #252535;
    flex: 1;
    border-radius: 9px;
    padding-top: 30px;
`;