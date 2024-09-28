// import React from 'react';

// const MedicineCard = ({ name, type, stripSize, price, originalPrice, discount, imageUrl, brand }) => {
//   const discountedPrice = (price - (price * discount) / 100).toFixed(2);

//   return (
//     <div className="container mx-auto mt-5 border border-gray-300  rounded-lg shadow-lg p-4 max-w-xs relative">
//       {discount > 0 && (
//         <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
//           {discount}% Off
//         </div>
//       )}
//       <img src={imageUrl} alt={name} className="w-full h-50 object-cover rounded-lg mb-3" />
//       <h3 className="text-lg font-semibold mb-1">{name} <span className="text-sm text-gray-500">500 mg</span></h3>
//       <p className="text-green-600 font-medium mb-1">{type}</p>
//       <p className="text-sm text-gray-500 mb-2">Strip size: {stripSize}</p>
//       <p className="text-sm text-gray-500 mb-3">{brand}</p>
//       <div className="flex items-center mb-4">
//         <span className="text-xl font-bold text-green-600">৳ {discountedPrice}</span>
//         {discount > 0 && <span className="text-sm line-through text-gray-500 ml-2">৳ {originalPrice}</span>}
//       </div>
//       <div>
//         <div>
//             <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-300">
//              Add to cart
//             </button>
//         </div>
//         <div className='text-center mt-2'>
//             <a href="" className=' underline text-blue-500 text-xl font-semibold  '>Find out more &gt;&gt; </a>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default MedicineCard;
