const Testimonial = () => {
    return (
<div className="relative h-[500px] mt-20 mb-10 flex items-center justify-center">
      <img
        src="https://i.ibb.co.com/8cPTcL8/Testimonial.jpg"
        alt="Testimonials Background"
        className="absolute inset-0 w-full h-full  object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="relative z-10  md:flex  items-center max-sm:top-12  lg:gap-[300px] md:gap-[50px] text-white p-6 ">
        <div className="md:px-10 t">
            <p className="font-semibold lg:text-xl text-sm">AVAILABLE 24/7 </p>
            <div className="">
                <h2 className="lg:text-7xl ext-center md:text-4xl text-2xl font-semibold mb-4">We are Always Ready <br className="max-sm:hidden" /> For a Challenge</h2>
            </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-2  lg:gap-20 md:gap-10 p-5 text-xl font-extralight ">
          <div>
            <p className="lg:text-8xl font-normal text-4xl md:text-6xl">14k</p>
            <p className="lg:text-2xl md:text-xl text-sm font-semibold ">Satisfied Users</p>
            
          </div>
          <div>
            <p className="lg:text-8xl font-normal text-4xl md:text-6xl">35+</p>
            <p className="lg:text-2xl md:text-xl text-sm font-semibold ">Clinics Connected</p>
            
          </div>
          <div>
            <p className="lg:text-8xl font-normal text-4xl md:text-6xl">15+</p>
            <p className="lg:text-2xl md:text-xl text-sm font-semibold ">Trusted Partners</p>
            
          </div>
          <div>
            <p className="lg:text-8xl font-normal text-4xl md:text-6xl">01+</p>
            <p className="lg:text-2xl md:text-xl text-sm font-semibold ">Years of Service</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default Testimonial;
  