import React, { useEffect, useState } from "react";
import useContentful from "../useContentful";
import List from "./List";

export default function Literature() {
  const { getData } = useContentful();
  const [results, setResults] = useState();

  useEffect(() => {
    const handleDate = async () => {
      try {
        const response = await getData("literature");
        setResults(response.items);
      } catch (error) {
        console.log("my errror: ", error);
      }
    };

    handleDate();
    return () => true;
  }, []);

  return (
    <div>
      <h2>Literature</h2>
      {results ? <List results={results} /> : <></>}
    </div>
  );
}
