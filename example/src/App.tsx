import React from 'react'
import './App.css'

import { Stack } from 'react-use-tailwind';

const App: React.FC = () => {
  return (
    <Stack gap-10>
      <Stack as="h1" text-3xl font-bold underline>
        Hello World!
      </Stack>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Stack>
  )
}

export default App

