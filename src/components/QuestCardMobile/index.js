import { QuestsCard, Card, Card2, Image, CardTitleWrapper, CardTitle } from './styles';

function QuestCardMobile( quest, isFirstColumn, onNavigate, key ) {

    
    return (
        <div>
            <QuestsCard
                isFirstColumn={isFirstColumn}
                onClick={onNavigate}
            >
                <Image
                        aspectRatio={1}
                        resizeMode="stretch"
                        
                />
                <Card>
                
                    <Card2>
                    
                        <CardTitleWrapper>
                            <CardTitle>{quest.title}</CardTitle>
                        </CardTitleWrapper>
                    </Card2>
                    
                </Card>
        </QuestsCard>
        
        </div>
    );  
}

export default QuestCardMobile;