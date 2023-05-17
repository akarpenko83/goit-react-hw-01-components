import data from '../data/data.json';
import friends from '../data/friends.json';

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from './FriendList/FriendList';


export default function App() {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Profile />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />  

    </div>
    
  );
};
