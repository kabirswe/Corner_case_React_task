import React from 'react';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const RadioWidget: React.FC = () => {
    const title:string = 'stations';
    return (
        <div>
            <Header title={title} />
            <Content />
            <Footer />
        </div>
    )
}