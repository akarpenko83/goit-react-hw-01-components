import user from './user.json';

export function Stats() {
    const { stats: { followers, views, likes } } = user;
    return (
        <ul className='stats'>
            <li className='stats__item'>
                <span className='label'>Followers</span>
                <span className='quantity'>{followers}</span>
            </li>
            <li className='stats__item'>
                <span className='label'>Views</span>
                <span className='quantity'>{views}</span>
            </li>
            <li className='stats__item'>
                <span className='label'>Likes</span>
                <span className='quantity'>{likes}</span>
            </li>
        </ul>
    )

};