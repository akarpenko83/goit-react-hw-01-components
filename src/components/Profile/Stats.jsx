import PropTypes from 'prop-types';
import css from './profile.module.css';

export default function Stats({ followers, views, likes }) {
    return (
        <ul className={css.stats}>
            <li className={css.stats__item}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.stats__item}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.stats__item}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    )
};

Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}