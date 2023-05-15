// import styled from 'styled-components/native';
import description from './user.json';



export function Description() {
   const { username, tag, location, avatar} = description;
    return (
        <div className='description'>
        <img
            src={avatar}
            alt='User avatar'
            className='avatar'
            />
        <p className='name'>{username}</p>
        <p className='tag'>{tag}</p>
        <p className='location'>{location}</p>
        </div>
    )
}