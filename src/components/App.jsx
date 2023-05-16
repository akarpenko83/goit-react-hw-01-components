import { Profile } from "./Profile/Profile";
export function App() {
  return (
    <div className="task-1"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
      <Profile />
    </div>
  );
};
