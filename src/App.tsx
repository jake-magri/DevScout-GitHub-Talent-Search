import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
// app component holds the display router in main element and a universal nav
function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
