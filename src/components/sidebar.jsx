import { useState } from 'react';
import { BsShare } from 'react-icons/bs';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col justify-center h-screen overflow-scroll w-[600px] px-4 ${
          showSidebar ? '' : 'mr-[-600px]'
        } transition-all duration-700 ease-in`}
      >
        <div>
          <div className="mb-8">
            <h2 className="text-2xl uppercase text-gray-600">
              Maiteya Buddhia in gesture of fearlessness &#40;abhaya mudra&#41;
            </h2>
          </div>

          <div className="flex gap-x-6 mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="flex justify-center items-center bg-gray-200 h-9 w-9 rounded-full">
                <BsShare className="w-6 h-6" />
              </div>
              <p className="text-gray-600">0</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex justify-center items-center bg-gray-200 h-9 w-9 rounded-full">
                <IoIosHeartEmpty className="w-6 h-6" />
              </div>
              <p className="text-gray-600">120</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex justify-center items-center bg-gray-200 h-9 w-9 rounded-full">
                <IoEyeOutline className="w-6 h-6" />
              </div>
              <p className="text-gray-600">27</p>
            </div>
          </div>

          <div className="mb-6 text-sm text-gray-800">
            <p>Dynasty: Ahichchatra</p>
            <p>Period: 200 CE</p>
            <p>Material: Sandstone</p>
            <p>Location: National Museum</p>
          </div>

          <div className="mb-8">
            <h3 className="mb-2 text-gray-900">Description:</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              totam expedita nihil quod. Minima sit repudiandae, nostrum, omnis
              nam, tempora odit unde dolores necessitatibus odio ipsum!
              <span className={`${showDescription ? 'hidden' : ''}`}>...</span>
              <span
                onClick={() => setShowDescription(!showDescription)}
                className={`pointer tracking text-amber-700 text-sm cursor-pointer ${
                  showDescription ? 'hidden' : ''
                }`}
              >
                Read more
              </span>
              <span className={`${showDescription ? '' : 'hidden'}`}>
                Reiciendis quis officiis voluptatem! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ut at doloribus ea? Optio sequi
                facere sed, fugit vitae dolor deleniti facilis quaerat. Qui
                omnis modi totam blanditiis non architecto vel.
              </span>
              <span
                onClick={() => setShowDescription(!showDescription)}
                className={`pointer tracking text-amber-700 text-sm cursor-pointer ${
                  showDescription ? '' : 'hidden'
                }`}
              >
                ...Read less
              </span>
            </p>
          </div>

          <div className="flex gap-4">
            <button className="text-amber-200 bg-amber-700 hover:bg-amber-800 transition-all uppercase px-3 py-2 rounded-md font-medium">
              Add to collection
            </button>
            <button className="border text-amber-700 border-amber-700 hover:bg-amber-700 hover:text-amber-200 transition-all px-3 py-2 rounded-md">
              Souvenir
            </button>
          </div>
        </div>
      </div>
      <button
        className={`left-3 top-3  fixed rounded-full text-2xl border-2 border-gray-300 w-11 h-11 hover:scale-110 transition-all ${
          showSidebar
            ? 'text-amber-900 bg-gray-200'
            : 'text-amber-200 bg-gray-900'
        }`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? '<' : '>'}
      </button>
    </>
  );
};

export default Sidebar;
