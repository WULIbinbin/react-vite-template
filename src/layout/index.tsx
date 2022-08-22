import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Tabbar from "./tabbar/index";

export default function Index(props) {

  return (
    <div>
      <Tabbar />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
