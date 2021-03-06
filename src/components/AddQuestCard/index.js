import React from 'react';
import add from '../../resources/imgs/add.png';
import useViewport from '../../resources/responsive';
/*import {
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';*/

import { AddQuestsCard, Card, Image, Text, CardText } from './styles';

// import { Container } from './styles';

export default function AddQuestCard({ isFirstColumn, onNavigate, title }) {

    const { width } = useViewport();
    const breakpoint = 620;

    return(
        <AddQuestsCard
            onClick={onNavigate}
            isFirstColumn={isFirstColumn}
            width={width}
            breakpoint={breakpoint}>
            <Card>
                <Image 
                    src={add}
                />
                <CardText>
                    <Text 
                        width={width}
                        breakpoint={breakpoint}>
                        {title}
                    </Text>
                </CardText>
                
            </Card>
            
        </AddQuestsCard>
    )
    
};

/*const styles = StyleSheet.create({
    container: {
        // Solução 2
        // flex: .5,

        // Solução 1
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2,

        //borderWidth: 1,
        //borderColor: 'red',
    },
    card: {
        //flex: 1,
        //borderWidth: 1,
        height: '97%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        // paddingBottom: 10
        // Solução 2
        // margin: 10,
    },
    image: {
        width: '50%',
        height: '50%',
        
    },
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {
        paddingRight: 10,
    },
});*/

