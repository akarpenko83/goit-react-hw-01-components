import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList(props) {
    const data = props.friends;
    return (
        <ul className={css["friend-list"]}>     
            {data.map(({ id, avatar, isOnline, name }) => (
                <FriendListItem id={id} avatar={avatar} isOnline={isOnline} name={name} />
                ))}
        </ul>
   )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
   }))
};