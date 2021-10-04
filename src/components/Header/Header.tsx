import React from 'react';
import BackArrow from './static/image/back-arrow.png';
import Switch from './static/image/switch.png';
import styles from './static/Header.module.scss';

export const Header: React.FC = () => {
    return (
        <div className={styles.HeaderSection}>
            <img className={styles.BackArrow} src={BackArrow} alt="left arrow" />
            <h1 className={styles.Title}>stations</h1>
            <img className={styles.Switch} src={Switch} alt="close button" />
        </div>
    )
}
