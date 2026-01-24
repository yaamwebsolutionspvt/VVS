import React from 'react';
import * as HiIcons from "react-icons/hi2";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa6";

const iconLibraries = {
    ...HiIcons,
    ...RiIcons,
    ...FaIcons
};

export default function ReactIcon({ name, size = 24, className = "" }) {
    const IconComponent = iconLibraries[name];

    if (!IconComponent) {
        console.error(`Icon "${name}" not found in ReactIcon wrapper.`);
        return null;
    }

    return <IconComponent size={size} className={className} />;
}
