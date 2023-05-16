import user from './user.json';
import Description from "./Description";
import Stats from "./Stats";

export function Profile() {
    return (<div className='profile'>
        <Description
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}   
        />
        <Stats
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
    </div>)
 };