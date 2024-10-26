import "./MoviesList.css";
import CardMovie from "../CardMovie/CardMovie";
import PaginationFooter from "../PaginationFooter/PaginationFooter";

export default function MoviesList({ movies ,getPage ,pageCount}) {

  return (
    <div className="movieList">
      <CardMovie movies={movies} />
      <PaginationFooter getPage={getPage} pageCount={pageCount}/>
    </div>
  );
}
