import { Outlet } from "react-router-dom";

export default function Index(props) {
  console.log(props);
  return (
    <div>
      <div>233</div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
