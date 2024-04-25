import Image from './components/image';
import MobileSidebar from './components/sidebar';
// import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="lg:flex">
      <MobileSidebar />
      <Image />
    </div>
  );
}

export default App;
