import { Link } from "react-router-dom";
import "./CardMovie.css";

export default function CardMovie({ movies }) {
  const showMovieInCard = movies.map((mov) => {
    return (
      <div key={mov.id} className="card1">
        <Link to={`/DetailsMovie/${mov.id}`}>
          <img
            src={"https://image.tmdb.org/t/p/w500/" + mov.poster_path}
            className="card--image"
            alt=""
          />
          <div className="card__overlay">
            <div className="overLay__text text-center w-100 p-2">
              <p>{`اسم الفيلم :  ${mov.original_title}`}</p>
              <p>{mov.release_date}</p>
              <p>{`عدد المقيمين : ${mov.vote_count}`}</p>
              <p> تقييم الفيلم :{mov.vote_average.toFixed(1)} </p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="my-1 cardList">
      {movies.length > 1 ? (
        showMovieInCard
      ) : (
        <h1 className="movieEmpty">لايوجد افلام لعرضها</h1>
      )}
    </div>
  );
}
