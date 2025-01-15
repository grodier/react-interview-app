import * as React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Random } from "./components/Random";
import { EventLogger } from "./components/EventLogger";

function App() {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    ref.current?.dispatchEvent(
      new CustomEvent("app-notify", {
        detail: {
          count,
        },
        bubbles: true,
      }),
    );
  }, []);

  return (
    <Random>
      {(zeroOrOne) => (
        <>
          <div>
            <a ref={ref} href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React? {zeroOrOne ? "Yes!!" : "Nah :("}</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <EventLogger />
        </>
      )}
    </Random>
  );
}

export default App;
