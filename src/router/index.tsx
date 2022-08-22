import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouteMain from "./routes";

export default function RouteContainer() {
  return (
    <Router>
      <RouteMain />
    </Router>
  );
}
