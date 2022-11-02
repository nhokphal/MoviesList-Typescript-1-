import { MovieDTO } from "./Movie.model";
import css from "./Movie.module.css";



export default function InvidualMovies(props: MovieDTO){
    const BulletLink = () => `movies/${props.id}`
    // need arrow keys in case we dont need binding function later
    return(
        <div className={css.div}>
            <a>
            <a href={BulletLink()} />
            <img alt="poster" src={props.poster} />
            </a>

            <p>
                <a href={BulletLink()} >{props.title}</a>
            </p>
        </div>
    )
}

