import React, { useMemo } from 'react';
import useTailwind, { type TailwindProps } from './useTailwind';

// import the basic flex styles b/c otherwise there's an edge case
// (only using implicit flex) where the words `flex` and `flex-col`
// don't appear in the client developer codebase and are not included 
// in the CSS compile.
import './flex.css';

interface StackProps extends TailwindProps, React.PropsWithChildren, React.HTMLAttributes<any> {
  as?: string;
}

const Stack: React.FC<StackProps> = (props) => {
  const [tailwindClassNames, rest] = useTailwind(props)
  const TagName = props.as ?? 'div';

  const classNames = useMemo(() => {
    const flex = getFlexDefaults(props);
    return [flex, tailwindClassNames].join(' ');
  }, [props, tailwindClassNames])

  return (
    <TagName
      className={classNames}
      {...rest}
    />
  );
}

const getFlexDefaults = (props: StackProps) => {
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
}

export default Stack;
