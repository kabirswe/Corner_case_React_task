import React, {useState} from 'react';
import { ListItems } from './ListItem';
import FmImage from './static/image/fm.png';
import styles from './static/Content.module.scss';
import { activeRadio, removeRadio } from '../../store/RadioSlice';
import { useDispatch } from 'react-redux';

const stationData = [
    {
        name: 'Putin FM',
        frequency: 66.6,
        image: FmImage
    },
    {
        name: 'Dribbble FM',
        frequency: 101.2,
        image: FmImage
    },
    {
        name: 'Doge FM',
        frequency: 99.4,
        image: FmImage
    },
    {
        name: 'Ballads FM',
        frequency: 87.1,
        image: FmImage
    },
    {
        name: 'Maximum FM',
        frequency: 142.2,
        image: FmImage
    }
];

export const Content: React.FC = () => {

    const dispatch = useDispatch();
    const [clicked, setClicked] = useState<string|number>("0");
    const handleToggle = (val:any) => {
        if (clicked === val) {
            dispatch(removeRadio());
            return setClicked("0");
        } else {
            dispatch(activeRadio(stationData[val]));
        }
        setClicked(val);
    };

    return (
        <div className={styles.ContentSection}>
            {stationData.map((item, index) => (
                <ListItems
                    onToggle={() => handleToggle(index)}
                    activeStation={clicked === index}
                    key={index}
                    title={item.name}
                    frequency={item.frequency}
                    image={item.image}
                />    
            ))}
        </div>
    )
}