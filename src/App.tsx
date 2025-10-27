import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/SiteComponents/Navbar';
import { copyCodeWithButton } from './utils/codeBlockHelper';

function App() {
  copyCodeWithButton();
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
