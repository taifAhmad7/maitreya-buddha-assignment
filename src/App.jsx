import Image from './components/image';
import MobileSidebar from './components/mobileSidebar';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <div className="hidden lg:flex">
        <Sidebar />
        <Image />
      </div>
      <div className="lg:hidden">
        <MobileSidebar />
        <Image />
      </div>
    </>
  );
}

export default App;
