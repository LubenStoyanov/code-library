import React from "react";
export default function Work({ result }) {
  // console.log(result);
  return (
    <div>
      <h2>{result.title}</h2>
      <span>{result.release}</span>
      <a href={result.link}>{result.link}</a>
    </div>
  );
}
