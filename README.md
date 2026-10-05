# Modal

Convenient modals for your React webapp

```bash
npm i @hazae41/modal
```

[**NPM 📦**](https://www.npmjs.com/package/@hazae41/modal)

## Demo

https://brume.tech

## Usage

You have to use React and Tailwind with [LaBase](https://github.com/hazae41/labase) framework

```tsx
import { Board } from "@hazae41/modal"
import { CloseContext } from "@hazae41/react-close-context"

export function App() {
  const [open, setOpen] = useState<MouseEvent>()

  const onOpen = useCallback((e: MouseEvent) => {
    setOpen(e)
  }, [])

  const onClose = useCallback(() => {
    setOpen(undefined)
  }, [])

  return <div>
    {open && <CloseContext close={onClose}>
      <Board x={open.clientX} y={open.clientY}>
          Hello world!
      </Board>
    </CloseContext>}
    <button onClick={onOpen}>
      Click me
    </button>
  </div>
}
```

You can also use [Chemin](https://github.com/hazae41/chemin) to use X and Y coords in the URL path

```tsx
import { PathBoard } from "@hazae41/modal"
import { usePathContext, useAnchorWithCoords } from "@hazae41/chemin"

export function App() {
  const path = usePathContext().getOrThrow()

  const hello = useAnchorWithCoords(path, "/hello")

  return <div>
    {path.url.pathname === "/hello" &&
      <PathBoard>
        Hello world!
      </PathBoard>}
    <a href={hello.url.href}
      onClick={hello.onClick}
      onKeyDown={hello.onKeyDown}>
      Click me
    </a>
  </div>
}
```