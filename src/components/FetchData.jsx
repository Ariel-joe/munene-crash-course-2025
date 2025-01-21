import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch("https://api.kanye.rest/");
        const result = await response.json();
        console.log(result);
        
      } catch (error) {
        console.error("failed to fetch data", error)
      }
    };

    dataFetch();
  }, []);
  return <div></div>;
};

export { FetchData };
