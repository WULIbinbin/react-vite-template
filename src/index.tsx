import { createRoot } from "react-dom/client";
import Router from "@/router";

function App() {
  return <Router></Router>;
}

const container = createRoot(document.getElementById("container"));
container.render(<App />);
