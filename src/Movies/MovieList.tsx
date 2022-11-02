import InvidualMovies from "./InvidualMovies";
import { MovieDTO } from "./Movie.model"
import css from "./MovieList.module.css";

export default function MoviesList(props: MoviesListProps) {
         /// adding map function, every list in lists append.
    return( 
        <div className={css.div}>
            {props.movies.map(movie => <InvidualMovies {...movie} key={movie.id} />)}
        </div>
    )
}



interface MoviesListProps {
    movies: MovieDTO[];
}