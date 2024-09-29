import { Link } from 'react-router-dom';

const OurServices = () => {
    return (
        <div className='container mx-auto'>
            <div className="py-12 mt-20 bg-gray-50">
  <h2 className="text-5xl font-bold text-center mb-8">Our Services</h2>
  <p className="text-center text-gray-600 mb-10 px-4 max-w-2xl mx-auto">
  At MediNest, we provide essential healthcare services tailored to your needs, ensuring quality and accessibility for everyone.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20 md:px-4">

    <Link to="" className="bg-gradient-to-r from-green-300 to-green-500 p-6 rounded-lg shadow-md text-center">
      <img src="https://i.ibb.co.com/jwRHKMy/Doctor.png" alt="Healthcare Providers" className="md:w-32 w-24 mx-auto mb-4"/>
      <h3 className="text-2xl font-bold  mb-2">Healthcare Providers</h3>
      <p className="text-gray-700">Connect with trusted doctors and clinics for general and specialized healthcare needs.</p>
    </Link>


    <Link to="" className="bg-gradient-to-r from-red-300 to-red-500 p-6 rounded-lg shadow-md text-center">
      <img src="https://i.ibb.co.com/4PkMzC7/Ambulance.png" alt="Ambulance Services" className="md:w-32 w-24 mx-auto mb-4"/>
      <h3 className="text-2xl font-bold mb-2">Ambulance Services</h3>
      <p className="text-gray-700">24/7 emergency transportation to ensure safe and quick access to healthcare.</p>
    </Link>

    <Link to="" className="bg-gradient-to-r from-blue-300 to-blue-500 p-6 rounded-lg shadow-md text-center">
      <img src="https://i.ibb.co.com/BKZQPSK/Pharmacy.png" alt="Pharmacy" className="md:w-32 w-24 mx-auto mb-4"/>
      <h3 className="text-2xl font-bold mb-2">Pharmacy</h3>
      <p className="text-gray-700">Order medicines with doorstep delivery and enjoy exclusive membership discounts.</p>
    </Link>


    <Link to="" className="bg-gradient-to-r from-yellow-200 to-yellow-500 p-6 rounded-lg shadow-md text-center">
      <img src="https://i.ibb.co.com/n7TPBrY/Blood.png" alt="Blood Bank" className="md:w-32 w-24 mx-auto mb-4"/>
      <h3 className="text-2xl font-bold mb-2">Blood Bank</h3>
      <p className="text-gray-700">Quick access to blood donations and urgent requests during emergencies.</p>
    </Link>

  </div>
</div>

        </div>
    );
};

export default OurServices;