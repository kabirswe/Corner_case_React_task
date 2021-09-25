import React from 'react';
import BackArrow from './static/image/back-arrow.png';
import Switch from './static/image/switch.png';
import styles from './static/Header.module.scss';

export interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <div className={styles.HeaderSection}>
            <img className={styles.BackArrow} src={BackArrow} alt="left arrow" />
            <h1 className={styles.Title}>{title}</h1>
            <img className={styles.Switch} src={Switch} alt="close button" />
        </div>
    )
}
