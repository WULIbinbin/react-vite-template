import { createRoot } from "react-dom/client";
import Routes from "@/router/routes";
import { BrowserRouter as Router } from "react-router-dom";

import 'tdesign-react/dist/reset.css';
import 'tdesign-react/es/style/index.css';
import "@/styles/index.less";

function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}

const container = createRoot(document.getElementById("container"));
container.render(<App />);
