import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/ExtraCard";

function Directors() {
  const [director, setDirector] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(data => setDirector(data))
  }, [])

  const directorsArr = director.map(director => <Card key={director.id} name={director.name} movies={director.movies} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorsArr}
      </main>
    </>
  );
};

export default Directors;
