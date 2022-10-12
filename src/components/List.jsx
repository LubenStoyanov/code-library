import Work from "./Work";
import { v4 as uuidv4 } from "uuid";

export default function List({ results }) {
  const listResults = results.map((result) => (
    // <li key={result.sys.id}>{result.fields.title}</li>
    <Work key={uuidv4()} result={result} />
  ));
  return (
    <div>
      <ul>{listResults}</ul>
    </div>
  );
}
