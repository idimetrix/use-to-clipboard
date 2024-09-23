# use-to-clipboard

Copy text to the clipboard using useToClipboard.

## Installation

To install the package, use npm:

```bash
pnpm add use-to-clipboard

yarn install use-to-clipboard

npm install use-to-clipboard
```

## Usage

```tsx
import React, { useState } from "react";
import { useToClipboard } from "use-to-clipboard";

const CopyTextComponent: React.FC = () => {
  const [text, setText] = useToClipboard();

  return (
    <div>
      <button onClick={() => setText("Hello, World!")}>
        Copy to Clipboard
      </button>

      {text && <p>Copied: {text}</p>}
    </div>
  );
};

export default CopyTextComponent;
```

## tsup

Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this

1. install dependencies

```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```

2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
   Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```

5. Publish your package

```zsh
$ npm publish
```

## test package

https://www.npmjs.com/package/use-to-clipboard
