import clsx from "clsx";
import PropTypes from 'prop-types';
import css from './FriendList.module.css';




export default function FriendListItem({id, avatar, isOnline, name}) {
    return (
        <li key={id} className={css.item}>
            <span className={clsx(
                css.status,
                isOnline && css.green,
                !isOnline && css.red,
            )}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    
   )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};