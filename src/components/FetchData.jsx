import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  const [load, setload] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch("https://api.kanye.rest/");
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("failed to fetch data", error);
      } finally {
        setload(false)
      }
    };

    dataFetch();
  }, []);

  return (
    <>

      {load ? (
        <p>Loading...</p>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p>Kanye once said {data.quote}</p>
        </div>
      )}

    </>
  );
};

export { FetchData };
