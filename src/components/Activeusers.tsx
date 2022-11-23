import { useEffect, useState } from "react";

export default function Activeusers() {
  const [publicUser, setPublicUser] = useState(
    Math.floor(Math.random() * 7420658)
  );
  const range = 6000;
  let randomnumber = Math.floor(Math.random() * range);
  const formatpublicnumber = new Intl.NumberFormat("de-DE").format(publicUser);

  function Increasepublic() {
    setInterval(() => {
      setPublicUser(publicUser + randomnumber);
    }, 6000);
  }

  function Decreasepublic() {
    setInterval(() => {
      setPublicUser(publicUser - randomnumber);
    }, 6000);
  }

  useEffect(() => {
    Increasepublic();
  });

  useEffect(() => {
    setTimeout(Decreasepublic, 3000);
  }, []);

  return (
    <div className="user_block">
      <p>Utilistaeurs sur le site:</p>
      <p>{formatpublicnumber} utilisateurs</p>
    </div>
  );
}
