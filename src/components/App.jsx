import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import data from '../data/data.json';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Profile />
      <Statistics title="Upload stats" data={data} />

    </div>
    
  );
};
