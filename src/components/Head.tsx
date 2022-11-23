import Activeusers from "./Activeusers";
import Hour from "./Hour";
import "../styles/head.css";

export default function Head() {
  return (
    <div className="head_container">
      <Hour />
      <Activeusers />
    </div>
  );
}
