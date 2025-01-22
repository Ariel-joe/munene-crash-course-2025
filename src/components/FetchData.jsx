import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("failed to fetch data", error);
      } finally {
        setLoad(false);
      }
    };

    dataFetch();
  }, []);

  return (
    <>
      {load ? (
        <div className="flex items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4 h-screen">
          {data.map((elem, i) => (
            <div key={i} className="w-[250px] h-[100px]">
              <img
                src={elem.url}
                alt=""
                width={elem.width}
                height={elem.height}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export { FetchData };
