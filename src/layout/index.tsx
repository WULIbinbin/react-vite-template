import { Outlet } from "react-router-dom";
import Tabbar from "./tabbar/index";

export default function Index(props) {
  console.log(props);
  return (
    <div>
      <Tabbar />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
