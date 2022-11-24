import { useEffect, useState } from "react";

export default function Activeusers() {
  const [publicUser, setPublicUser] = useState(
    Math.floor(Math.random() * 7420658)
  );
  const range = 6000;

  function Increasepublic() {
    setInterval(() => {
      let randomnumber = Math.floor(Math.random() * range);
      setPublicUser(publicUser + randomnumber);
    }, 6000);
  }

  function Decreasepublic() {
    setInterval(() => {
      let randomnumber = Math.floor(Math.random() * range);
      setPublicUser(publicUser - randomnumber);
    }, 3000);
  }

  useEffect(() => {
    Increasepublic();
    Decreasepublic();
  }, []);

  return (
    <div className="user_block">
      <p>Utilistaeurs sur le site:</p>
      <p>{new Intl.NumberFormat("de-DE").format(publicUser)} utilisateurs</p>
    </div>
  );
}
