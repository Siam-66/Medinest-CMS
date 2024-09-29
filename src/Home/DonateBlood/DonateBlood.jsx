import { Link } from 'react-router-dom';

const DonateBlood = () => {
    return (
        <div className="mt-20">

<div className="relative py-12 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white">
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center bg-opacity-50" 
    style={{
      backgroundImage: "url('https://your-image-url.jpg')", 
      opacity: 0.5 
    }}>
  </div>

  {/* Content Container */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-extrabold mb-6">
      Be a Hero. Donate Blood. Save Lives.
    </h2>
    <p className="text-lg font-medium mb-8">
      Join our blood donation movement and make a life-saving difference. Your blood can give someone a second chance at life.
    </p>

    {/* Call-to-Action Button */}
    <Link to="/" className="inline-block bg-white text-red-600 font-bold py-3 px-6 rounded-full text-lg transition hover:bg-gray-200">
      Become a Blood Donor
    </Link>
  </div>
</div>




        </div>
    );
};

export default DonateBlood;