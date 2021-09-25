import React from 'react';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './static/RadioWidget.module.scss';

export interface RadioWidgetProps {
    title: string;
  }

export const RadioWidget: React.FC<RadioWidgetProps> = ({title}) => {
    return (
        <div>
            <Header title="stations" />
            <Content title="ahsjahf" />
            <Footer topTitle="Currently Playing" title="Bribbble Fm" />
        </div>
    )
}