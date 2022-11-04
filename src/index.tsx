import { createRoot } from "react-dom/client"

import MainApp from "./MainApp"

const domNode = document.getElementById("app")
// Is this check necessary ? we could force as HTMLElement instead
if (!domNode) {
  throw new Error("Please set an element with id 'app' in 'index.html'")
}
const root = createRoot(domNode)
root.render(<MainApp />)
