import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "./routes";

function mapRoute(child) {
  return child.map((item) => (
    <Route path={item.path} element={<item.component />} key={item.path}>
      {item.children && mapRoute(item.children)}
    </Route>
  ));
}

export default function RouteContainer() {
  return (
    <BrowserRouter>
      <Routes>{mapRoute(routes)}</Routes>
    </BrowserRouter>
  );
}
