import { useEffect, useState } from "react";

export default function Usetoken() {
  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token != null) {
      setHasToken(true);
    }
  }, []);
  return hasToken;
}
