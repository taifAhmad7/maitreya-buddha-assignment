import buddhaImage from '../assets/buddha-image.png';

const Image = () => {
  return (
    <div
      className="flex justify-center items-center h-screen w-full"
      style={{
        backgroundImage:
          'radial-gradient(circle, #3d3d3d, #323232, #282828, #1e1e1e, #141414, #0f0f0f, #080808, #000000, #000000, #000000, #000000, #000000)',
      }}
    >
      <img className="w-56" src={buddhaImage} alt="" />
    </div>
  );
};

export default Image;
