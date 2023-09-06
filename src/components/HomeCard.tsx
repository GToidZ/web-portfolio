import { IconDefinition, IconLookup, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconName } from '@fortawesome/fontawesome-common-types';
import '../styles/my.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type HomeCardProps = {
    label: string;
    faIcon?: IconName;
    extraClasses?: string;
}

export default function HomeCard({ label, faIcon='arrow-right', extraClasses }: HomeCardProps){
    const iconLookup: IconLookup = {
        prefix: 'fas',
        iconName: faIcon
    }
    const iconDefinition: IconDefinition = findIconDefinition(iconLookup)
    return (
        <a href={`#${label.replace(' ', '_')}`} className={`home-card ${extraClasses}`}>
            <span>{label}</span>
            <FontAwesomeIcon icon={iconDefinition} />
        </a>
    )
}