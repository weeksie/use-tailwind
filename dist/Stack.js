import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import useTailwind from './useTailwind';
// import the basic flex styles b/c otherwise there's an edge case
// (only using implicit flex) where the words `flex` and `flex-col`
// don't appear in the client developer codebase and are not included 
// in the CSS compile.
import './flex.css';
const Stack = (props) => {
    const [tailwindClassNames, rest] = useTailwind(props);
    const TagName = props.as ?? 'div';
    const classNames = useMemo(() => {
        const flex = getFlexDefaults(props);
        return [flex, tailwindClassNames].join(' ');
    }, [props, tailwindClassNames]);
    return (_jsx(TagName, { className: classNames, ...rest }));
};
const getFlexDefaults = (props) => {
    if (props.flex === undefined) {
        if (!props['flex-row'] &&
            !props['flex-row-reverse'] &&
            !props['flex-col-reverse'] &&
            props['flex-col'] === undefined) {
            return 'flex flex-col';
        }
        return 'flex';
    }
    return '';
};
export default Stack;
