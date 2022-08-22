import tabConfig from "@/config/tabConfig";
import { Link } from "react-router-dom";

export default function Index(props) {
  console.log(props);
  return (
    <div>
      {tabConfig.map((item) => (
        <Link to={item.to} key={item.to}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
