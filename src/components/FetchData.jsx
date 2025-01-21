import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch("https://cat-fact.herokuapp.com/facts");
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
              <p className="bg-blue-400 font-semibold text-lg p-2">
                {elem.type}
              </p>
              <p className="bg-slate-400 text-gray-800 p-2 text-sm">
                {elem.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export { FetchData };
