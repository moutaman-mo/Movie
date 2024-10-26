import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailsMovie.css";
import axios from "axios";
export default function DetailsMovie() {
  const [detailsMovie, setDetailsMovie] = useState([]);
  const prams = useParams();
  const handleDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${prams.id}?api_key=6bf13f3d41885a99248fd522aa285f01&language=ar`
      );
      // سؤال
      setDetailsMovie(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleDetails();
  }, []);
  return (
    <div>
      <div className="card-top">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + detailsMovie.poster_path}
          alt=""
        />
        <div className="text-card-top">
          <p>اسم الفيلم: {detailsMovie.original_title}</p>
          <p>تاريخ الفيلم: {detailsMovie.release_date}</p>
          <p>عدد المقيمين: {detailsMovie.vote_count}</p>
          <p> التقييم: {detailsMovie.vote_average}</p>
        </div>
      </div>
      <div className="card-bottom">
        <h2>القصة:</h2>
        <p>{detailsMovie.overview}</p>
      </div>
      <div className="buttons">
        <Link to="/">
          <button>عودة للصفحة الرئيسية</button>
        </Link>
        <a href={detailsMovie.homepage}>
          <button>مشاهدة الفيلم</button>
        </a>
      </div>
    </div>
  );
}
//
