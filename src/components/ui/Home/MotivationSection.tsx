const MotivationSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* First Column */}
      <div className="text-center">
        <h3 className="text-xl font-bold">WORKING IN</h3>
        <p className="text-4xl font-bold mt-2">OVER 40</p>
        <p className="text-xl">COUNTRIES</p>
      </div>

      {/* Second Column */}
      <div className="text-center">
        <h3 className="text-xl font-bold">MAKE A</h3>
        <p className="text-4xl font-bold mt-2">DIFFERENCE</p>
      </div>

      {/* Third Column */}
      <div className="text-center">
        <p className="text-3xl font-bold">0300 500 1000</p>
        <p className="text-lg">100% DONATION POLICY</p>
      </div>
    </div>
  );
};

export default MotivationSection;
