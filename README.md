# useTailwind

A hook that allows you to use tailwind class names as top level
properties on react components. With an included `Stack` component
which implements the hook and is provided for convenience. The example
from the [tailwind
docs](https://tailwindcss.com/docs/guides/create-react-app) becomes:

```typescript
import { Stack } from 'react-use-tailwind';

const App = () {
  return (
    <Stack as="h1" text-3xl font-bold underline>
      Hello world!
    </Stack>
  )
}

export default App;
```

In the Stack component `flex` is defaulted to `true`

## Hook Usage

```typescript

import React from 'react';

import useTailwind, { type TailwindPropsWithChildren } from 'react-use-tailwind';

interface MyTailwindComponentProps extends TailwindPropsWithChildren {}

const MyTailwindComponent: React.FC<MyTailwindComponentProps> = (tailwindProps) => {
  const [classNames, props] = useTailwind(tailwindProps);

  return (
    <div className={classNames} {...props} />
  )
}

export default MyTailwindComponent;
```

## Limitations
* Tailwind class names with illegal characters (`::`, `/`, etc) still
  have to be put into the `classNames` prop.
* This is a naive implementation and uses a static array of tailwind
  class names, so the package size is bigger than it needs to be.
