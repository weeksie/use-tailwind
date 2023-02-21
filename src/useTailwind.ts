import { useMemo } from 'react';
import { TailwindClassNames } from './tailwind';

type TailwindProp = typeof TailwindClassNames[number];

const ClassSet = new Set<TailwindProp>(TailwindClassNames);

export type TailwindProps = {
  [K in TailwindProp]?: boolean;
};

const useTailwind = <T extends TailwindProps>(props: T): [string, Omit<T, TailwindProp>] => {
  return useMemo(() => {
    let classNames: string[] = [];
    let filtered = {...props};

    if (props.flex === undefined) {
      classNames.push('flex');

      if (props['flex-col'] === undefined &&
        (!props['flex-row'] && !props['flex-row-reverse'] && !props['flex-col-reverse'])
      ) {
        classNames.push('flex-col'); // flex column by default
      }
    }

    for (let prop in filtered) {
      if (ClassSet.has(prop as TailwindProp) && !!filtered[prop]) {
        classNames.push(prop);
        delete filtered[prop];
      }
    }

    const raw = (props as any).className;

    if (raw) {
      for (let cn of raw.split(' ')) {
        classNames.push(cn);
      }
      delete filtered['className'];
    }

    return [classNames.join(' '), filtered];
  }, [props]);
}

export default useTailwind;
