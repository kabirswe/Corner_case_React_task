import React from 'react';
import styles from './static/Content.module.scss';

export interface ContentProps {
    title: string;
}

export const Content: React.FC<ContentProps> = ({title}) => {
    return (
        <div className={styles.ContentSection}>
            putin fm ------- 88,6
        </div>
    )
}
