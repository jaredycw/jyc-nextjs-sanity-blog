"use client"
import React, { useEffect, useState } from "react";

export default function RankingTable(props: any) {
  const [table, setTable] = useState({ items: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.jsonlink);
        const data = await response.json();
        setTable({ items: data });
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch the JSON data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [props.jsonlink]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = table.items.filter((item: any) =>
    Object.values(item)
      .filter((value: any) => typeof value === "string")
      .some((value: any) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <>
      <div>
        <h1>Ranking Table</h1>
        <div className="mb-5">
          <input
          type="text"
          placeholder="Search the keywords"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full bg-transparent border-b py-2 pl-3 focus:outline-none focus:rounded-md focus:ring-1 ring-[var(--jy-black)] text-[var(--jy-black)]"
          aria-placeholder="keywords"
          />
        </div>
        <section className="table-overflow">
          {loading ? (
            <>
            <div className="animate-pulse">
              <div className="h-8 bg-gray-500 mt-3 mb-6"></div>
              <div className="h-8 bg-gray-200 mb-6"></div>
              <div className="h-8 bg-gray-400 mb-6"></div>
              <div className="h-8 bg-gray-200 mb-6"></div>
              <div className="h-8 bg-gray-400 mb-6"></div>
            </div>
          </>
          ) : error ? (
            <>Failed to load the table</>
          ) : table.items.length > 0 ? (
            <table>
              <thead>
                <tr>
                      <>
                          {props.firstCol && <th>{props.firstCol}</th>}
                          {props.secondCol && <th>{props.secondCol}</th>}
                          {props.thirdCol && <th>{props.thirdCol}</th>}
                          {props.fourthCol && <th>{props.fourthCol}</th>}
                          {props.fifthCol && <th>{props.fifthCol}</th>}
                          {props.sixthCol && <th>{props.sixthCol}</th>}
                          {props.seventhCol && <th>{props.seventhCol}</th>}
                      </>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item: any, index: any) => (
                  <tr key={index}>      
                      <>                       
                        {item[props.firstColVariable] && <td>{item[props.firstColVariable]}</td>}
                        {item[props.secondColVariable] && <td>{item[props.secondColVariable]}</td>}
                        {item[props.thirdColVariable] && <td>{item[props.thirdColVariable]}</td>}
                        {item[props.fourthColVariable] && <td>{item[props.fourthColVariable]}</td>}
                        {item[props.fifthColVariable] && <td>{item[props.fifthColVariable]}</td>}
                        {item[props.sixthColVariable] && <td>{item[props.sixthColVariable]}</td>}
                        {item[props.seventhColVariable] && <td>{item[props.seventhColVariable]}</td>}
                      </>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>No items found</>
          )}
        </section>
      </div>
    </>
  );
}





      
