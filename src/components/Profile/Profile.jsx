import user from '../../data/user.json';
import Description from "./Description";
import Stats from "./Stats";
import css from "./profile.module.css";

export default function Profile() {
    return (<div className={css.profile}>
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