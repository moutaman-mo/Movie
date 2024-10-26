import "./App.css";
import axios from "axios";
import { getAllMovie } from "./Components/Api";
import { useEffect, useState } from "react";
import { NavBar, MoviesList, DetailsMovie } from "./Components/index";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  // const [search, setSearch] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [totalMovies, setTotalMovies] = useState(0);
  // function halloWorld() {
  //   setValue((prev) => {
  //     console.log(prev);
  //     return prev + "world";
  //   });
  // }
  const domain = "api.themoviedb.org/3/discover/movie?";
  const apiKey = "6bf13f3d41885a99248fd522aa285f01";
  useEffect(() => {
    try {
      getAllMovie().then((response) => {
        return (
          setMovies(response.data.results),
          setPageCount(response.data.total_pages),
          setTotalMovies(response.data.total_results)
        );
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  const getPage = async (page) => {
    let res = await axios.get(
      `https://${domain}api_key=${apiKey}&&language=en&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };
  async function search(word) {
    if (word != "") {
      let res = await axios.get(
        `https://${domain}api_key=${apiKey}&&query=${word}&&language=en`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  }
  return (
    <div>
      <NavBar search={search} />
      <Container>
        <h4> Total Movies : {totalMovies}</h4>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                  totalMovies={totalMovies}
                />
              }
            />
            <Route path="/DetailsMovie/:id" element={<DetailsMovie />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}
