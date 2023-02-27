import { useMemo } from 'react';
import ClassNames from './classNames';
const useTailwind = (props) => {
    return useMemo(() => {
        let classNames = [];
        let filtered = { ...props };
        for (let prop in filtered) {
            // e.g. p-10 -> p-
            const prefix = prop.replace(/[0-9]+$/, '');
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
