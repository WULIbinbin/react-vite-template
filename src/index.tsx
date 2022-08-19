import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div>2333</div>;
}

const container = createRoot(document.getElementById("container"));
container.render(<App />);
