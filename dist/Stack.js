import { jsx as _jsx } from "react/jsx-runtime";
import useTailwind from './useTailwind';
const Stack = (tailwindProps) => {
    const [classNames, props] = useTailwind(tailwindProps);
    if (props.as) {
        return _jsx(props.as, { className: classNames, ...props });
    }
    return (_jsx("div", { className: classNames, ...props }));
};
export default Stack;
