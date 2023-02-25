import type { TailwindClassName } from './tailwind';
export type TailwindProps = {
    [K in TailwindClassName]?: boolean;
};
export interface TailwindPropsWithChildren extends TailwindProps, React.PropsWithChildren, React.HTMLAttributes<any> {
}
declare const useTailwind: <T extends TailwindProps>(props: T) => [string, Omit<T, TailwindClassName>];
export default useTailwind;
