import PropTypes from 'prop-types';
export default function Description({ username, tag, location, avatar }) {
    return (
        <div className='description'>
        <img
            src={avatar}
            alt='User avatar'
            className='avatar'
            width="40%"
            />
        <p className='name'>{username}</p>
        <p className='tag'>{tag}</p>
        <p className='location'>{location}</p>
        </div>
    )
}
Description.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
}