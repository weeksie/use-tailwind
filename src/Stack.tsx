import React, { useMemo } from 'react';

import useTailwind, { type TailwindProps } from './useTailwind';

interface StackProps extends TailwindProps, React.PropsWithChildren, React.HTMLAttributes<any> {
  as?: string;
}

const Stack: React.FC<StackProps> = (props) => {
  const [tailwindClassNames, rest] = useTailwind(props)
  const TagName = props.as ?? 'div';

  // have to shove these in `style` b/c tailwind won't add generate
  // flex classes unless the literal values are in the app source
  // code.
  const flex = getFlexDefaults(props);

  return (
    <TagName
      style={flex}
      className={tailwindClassNames}
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
        return { display: 'flex', flexDirection: 'column' };
      }
    return {display: 'flex'};
  }

  return {};
}

export default Stack;
