import { useState, useEffect } from "react";

function DataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Here is your fetched data!");
    }, 2000);
  }, []);
  return <p>{data}</p>;
}

export default DataComponent;
