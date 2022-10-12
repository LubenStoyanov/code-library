import { useEffect, useState } from "react";
import useContentful from "./useContentful";
import "./App.css";
import Searchbar from "./components/Searchbar";
import List from "./components/List";
import Literature from "./components/Literature";
import Music from "./components/Music";
import Art from "./components/Art";

function App() {
  const [contentType, setContentType] = useState("");
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const { getData } = useContentful();

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return () => true;
    }
    const handleData = async () => {
      try {
        const data = await getData(search, contentType);
        console.log(data);
        setResults(data.items);
      } catch (error) {
        console.log("my error", error);
      }
    };
    handleData();
    return () => true;
  }, [search]);

  return (
    <div className="App">
      <h1>Fine Arts</h1>
      <div style={{ display: "flex", gap: 100 }}>
        {/* <List results={results} contentType={contentType} /> */}
        <Literature results={results} />
        <Music results={results} />
        <Art />
      </div>
      <Searchbar setSearch={setSearch} setContentType={setContentType} />
    </div>
  );
}

export default App;
