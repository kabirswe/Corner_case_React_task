import React from 'react';
import styles from './static/ListItem.module.scss';
import MinusImage from './static/image/minus.png';
import PlusImage from './static/image/plus.png';

export interface ListItemsProps {
    title: string,
    activeStation: boolean;
    frequency: number;
    image: string;
    onToggle(): any; 
}

export const ListItems: React.FC<ListItemsProps> = ({title, frequency, image, activeStation, onToggle }) => {
    return (
        <div className={styles.ListSection}>
            <div className={activeStation ? (`${styles.FlipPanel} ${styles.FlipPanelShow}`) : styles.FlipPanel}>
                <img src={MinusImage} className={styles.Minus} />
                <img src={image} className={styles.FmImage} />
                <img src={PlusImage} className={styles.Plus} />
            </div>
            <div className={styles.StationInfo} onClick={onToggle}>
                <p className={styles.TitleName}>{title}</p>
                <p className={styles.TitleFrequency}>{frequency}</p>
            </div>
        </div>
    )
}