import { useMemo } from 'react';
import ClassNames from './classNames';
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
            // e.g. p-10 -> p-
            const prefix = prop.replace(/[0-9+]$/, '');
            if (ClassNames.has(prefix) && !!filtered[prop]) {
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
