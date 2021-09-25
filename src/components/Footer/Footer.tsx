import React from 'react';
import styles from './static/Footer.module.scss';

export interface FooterProps {
    topTitle: string;
    title: string;
}

export const Footer: React.FC<FooterProps> = ({title, topTitle}) => {
    return (
        <div className={styles.FooterSection}>
            <p className={styles.TopTitle}>{topTitle}</p>
            <h3 className={styles.Title}>{title}</h3>
        </div>
    )
}
