import React from 'react';
import { type TailwindProps } from './useTailwind';
interface StackProps extends TailwindProps, React.PropsWithChildren, React.HTMLAttributes<any> {
    as?: string;
}
declare const Stack: React.FC<StackProps>;
export default Stack;
