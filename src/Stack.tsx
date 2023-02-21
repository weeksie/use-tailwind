import React from 'react';

import useTailwind, { type TailwindProps } from './useTailwind';

interface StackProps extends TailwindProps, React.PropsWithChildren, React.HTMLAttributes<any> {
  as?: string;
}

const Stack: React.FC<StackProps> = (tailwindProps) => {
  const [classNames, props] = useTailwind(tailwindProps);

  if (props.as) {
    return <props.as className={classNames} {...props} />;
  }

  return (
    <div className={classNames} {...props} />
  )
}

export default Stack;
