import Literature from "./Literature";
import Work from "./Work";

export default function List({ results, contentType }) {
  // console.log(results);
  const listResults = results.map((result) => {
    // <Work key={result.sys.id} result={result} />
    if (contentType === "music") {
      <Music />;
    } else if (contentType === "art") {
      <Art />;
    } else {
      <Literature />;
    }
  });
  return (
    <div>
      <ul>{listResults}</ul>
    </div>
  );
}
