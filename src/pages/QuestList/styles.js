import styled from 'styled-components';
import FlatList from 'flatlist-react';

export const ViewIndicator = styled.div`
    flex: 1;
    justify-content: center;
`;

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