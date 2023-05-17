import PropTypes from 'prop-types';
import css from './statistics.module.css';
import generateRandomColor from 'utils/random-color';

export default function Statistics(props) {
    return (
        <section className={css.statistics}>
            {props.title && <h2 className={css.title}>{props.title}</h2>}
            
            <ul className={css.statlist}>
                {props.data.map(({ id, label, percentage }) => (
                    <li
                    key={id}
                    className={css.item}
                    style={{backgroundColor: generateRandomColor()}}    
                    >
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
                </li> 
                 ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired, 
    })).isRequired,
}