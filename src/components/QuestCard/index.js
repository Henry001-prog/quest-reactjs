import React, { useState, useEffect } from 'react';

//import Form from '../../resources/imgs/form-icon.png';

import { QuestsCard, QuestCardMobile, Card, Card2, Image, CardTitleWrapper, CardTitle } from './styles';

export default function QuestCard({ isFirstColumn, onNavigate, title }) {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        width < breakpoint ? 
        <div>
            <QuestCardMobile
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
                            <CardTitle>{title}</CardTitle>
                        </CardTitleWrapper>
                    </Card2>
                </Card>
            </QuestCardMobile>
        </div>
        :
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
                            <CardTitle>{title}</CardTitle>
                        </CardTitleWrapper>
                    </Card2>
                </Card>
            </QuestsCard>
        </div>
     
    );
}