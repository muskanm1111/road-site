const Card = () => {
  return (
    <div>
      <div className="bg-white p-4 my-20">
        <h1 className="text-4xl md:text-5xl text-black text-center mb-8 font-bold  ">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-2">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="https://design1-lime.vercel.app/_next/image?url=%2FRoadConstruction.jpg&w=1920&q=100"
                  alt="Road Construction"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="w-full p-4">
                <h2 className="text-xl font-bold">Card Title</h2>
                <p className="mt-2 text-gray-600">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="https://design1-lime.vercel.app/_next/image?url=%2FRoadConstruction.jpg&w=1920&q=100"
                  alt="Road Construction"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="w-full p-4">
                <h2 className="text-xl font-bold">Card Title</h2>
                <p className="mt-2 text-gray-600">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="https://design1-lime.vercel.app/_next/image?url=%2FAsphaltPaving.jpg&w=1920&q=100"
                  alt="Asphalt Paving"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="w-full p-4">
                <h2 className="text-xl font-bold">Card Title</h2>
                <p className="mt-2 text-gray-600">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="https://design1-lime.vercel.app/_next/image?url=%2FRoadConstruction.jpg&w=1920&q=100"
                  alt="Road Construction"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="w-full p-4">
                <h2 className="text-xl font-bold">Card Title</h2>
                <p className="mt-2 text-gray-600">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="https://design1-lime.vercel.app/_next/image?url=%2FAsphaltPaving.jpg&w=1920&q=100"
                  alt="Asphalt Paving"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="w-full p-4">
                <h2 className="text-xl font-bold">Card Title</h2>
                <p className="mt-2 text-gray-600">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="https://design1-lime.vercel.app/_next/image?url=%2FBridge%20Construction.webp&w=1920&q=100"
                  alt="Bridge Construction"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="w-full p-4">
                <h2 className="text-xl font-bold">Card Title</h2>
                <p className="mt-2 text-gray-600">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="px-12 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200  flex max-w-full mx-auto mt-5">
          View All
        </button>
      </div>
    </div>
  );
};

export default Card;
