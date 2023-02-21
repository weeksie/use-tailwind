import { useMemo } from 'react';
import { TailwindClassNames } from './tailwind';
const ClassSet = new Set(TailwindClassNames);
const useTailwind = (props) => {
    return useMemo(() => {
        let classNames = [];
        let filtered = { ...props };
        if (props.flex === undefined) {
            classNames.push('flex');
            if (props['flex-col'] === undefined &&
                (!props['flex-row'] && !props['flex-row-reverse'] && !props['flex-col-reverse'])) {
                classNames.push('flex-col'); // flex column by default
            }
        }
        for (let prop in filtered) {
            if (ClassSet.has(prop) && !!filtered[prop]) {
                classNames.push(prop);
                delete filtered[prop];
            }
        }
        const raw = props.className;
        if (raw) {
            for (let cn of raw.split(' ')) {
                classNames.push(cn);
            }
            delete filtered['className'];
        }
        return [classNames.join(' '), filtered];
    }, [props]);
};
export default useTailwind;
