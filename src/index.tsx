import React from 'react';
import './devicon/devicon-base.css';
import devicons from './devicon/devicon.json';
import _ from 'lodash';

interface Props {
    name: string;
    colored?: boolean;
    svg?: boolean;
    wordmark?: boolean;
    plain?: boolean;
    original?: boolean;
    fontSize?: string;
    className?: string;
}

const Devicon: React.FC<Props> = (props: Props) => {
    const {
        name,
        colored = false,
        svg = false,
        wordmark = false,
        plain = false,
        original = false,
        fontSize = false,
        className = '',
    } = props;

    const brand = _.find(devicons, (i: any) => {
        return i.name == name.toLowerCase();
    });

    if (brand) {
        if (svg) {
            const cdnsvg = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
            // let iconName = `${brand.name}-${original ? 'original' : 'plain'}${wordmark ? '-wordmark' : ''}`;
            let iconName = `${brand.name}`;
            if (original) {
                iconName = `${iconName}-original`;
            } else if (plain) {
                iconName = `${iconName}-plain`;
            } else {
                if (brand.versions.svg.includes('original')) {
                    iconName = `${iconName}-original`;
                }
                if (brand.versions.svg.includes('plain')) {
                    iconName = `${iconName}-plain`;
                }
            }
            if(wordmark){
                iconName = `${iconName}-wordmark`;
            }
            const iconSvg = `${cdnsvg}/${brand.name}/${iconName}.svg`;
            return <img src={iconSvg} className={className}/>;
        } else {
            let classes = `devicon-${brand.name}`;

            if (original) {
                classes = `${classes}-original`;
            } else if (plain) {
                classes = `${classes}-plain`;
            } else {
                if (brand.versions.font.includes('original')) {
                    classes = `${classes}-original`;
                }
                if (brand.versions.font.includes('plain')) {
                    classes = `${classes}-plain`;
                }
            }


            if ((original || plain) && wordmark) {
                classes = `${classes}-wordmark`;
            }

            if (colored) {
                classes = `${classes} colored`;
            }
            const style = fontSize ? {fontSize} : {};
            return <i className={`${classes} ${className}`} style={style}></i>;
        }
    } else {
        return <i></i>;
    }
};

export default Devicon;
