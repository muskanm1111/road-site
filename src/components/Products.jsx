// import React from "react";

const Card = () => {
  return (
    <div>
      <div className="bg-white p-4 my-20">
        <h1 className="text-4xl md:text-5xl text-yellow-500 text-center mb-14 font-bold">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto py-2">
          {/* Card 1 */}
          <div className="relative bg-white rounded-lg shadow-lg hover:-translate-y-4 transition-transform duration-500 group overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-yellow group-hover:bg-yellow-400  opacity-60 transition-all duration-300 z-10 "></div>

            <div className="flex flex-col relative">
              <div className="w-full">
                <img
                  src="https://htmldemo.net/tm/simply/simply/images/service/6.jpg"
                  alt="Road Construction"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="group-hover:text-white text-2xl font-bold opacity-0  group-hover:opacity-100 absolute z-50 left-40  top-32">
                DETAILS
              </h3>
              <div className="w-full p-4 relative z-20">
                <h2 className="text-xl font-bold text-black group-hover:text transition-colors duration-300 group-hover:opacity-0">
                  Card Title
                </h2>
                <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors group-hover:opacity-0 duration-300">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
                {/* Hidden Learn More button */}
                {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-lg shadow-lg hover:-translate-y-4 transition-transform duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-yellow group-hover:bg-yellow-400  opacity-60 transition-all duration-300 z-10  "></div>

            <div className="flex flex-col relative">
              <div className="w-full relative">
                <h3 className="group-hover:text-white text-2xl font-bold opacity-0  group-hover:opacity-100 absolute z-50 left-40  top-32">
                  DETAILS
                </h3>
                <img
                  src="https://htmldemo.net/tm/simply/simply/images/service/8.jpg"
                  alt="Asphalt Paving"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-full p-4 relative z-20">
                <h2 className="text-xl font-bold text-black group-hover:text transition-colors duration-300 group-hover:opacity-0  ">
                  Card Title
                </h2>

                <p className="mt-2 text-gray-600  group-hover:opacity-0 transition-colors duration-300 ">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
                {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-lg shadow-lg hover:-translate-y-4 transition-transform duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-yellow-400 opacity-60 transition-all duration-300 z-10"></div>

            <div className="flex flex-col relative">
              <h3 className="group-hover:text-white text-2xl font-bold opacity-0  group-hover:opacity-100 absolute z-50 left-40  top-32">
                DETAILS
              </h3>
              <div className="w-full">
                <img
                  src="https://htmldemo.net/tm/simply/simply/images/service/2.jpg"
                  alt="Bridge Construction"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-full p-4 relative z-20">
                <h2 className="text-xl font-bold text-black group-hover:text transition-colors duration-300 group-hover:opacity-0">
                  Card Title
                </h2>
                <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors duration-300 group-hover:opacity-0">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
                {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white rounded-lg shadow-lg hover:-translate-y-4 transition-transform duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-yellow-400 opacity-60 transition-all duration-300 z-10"></div>

            <div className="flex flex-col relative">
              <h3 className="group-hover:text-white text-2xl font-bold opacity-0  group-hover:opacity-100 absolute z-50 left-40  top-32">
                DETAILS
              </h3>
              <div className="w-full">
                <img
                  src="https://htmldemo.net/tm/simply/simply/images/service/1.jpg"
                  alt="Road Construction"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-full p-4 relative z-20">
                <h2 className="text-xl font-bold text-black group-hover:text transition-colors duration-300 group-hover:opacity-0">
                  Card Title
                </h2>
                <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors duration-300 group-hover:opacity-0">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
                {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative bg-white rounded-lg shadow-lg hover:-translate-y-4 transition-transform duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-yellow-400 opacity-60 transition-all duration-300 z-10"></div>

            <div className="flex flex-col relative">
              <h3 className="group-hover:text-white text-2xl font-bold opacity-0  group-hover:opacity-100 absolute z-50 left-40  top-32">
                DETAILS
              </h3>
              <div className="w-full">
                <img
                  src="https://htmldemo.net/tm/simply/simply/images/service/3.jpg"
                  alt="Asphalt Paving"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-full p-4 relative z-20">
                <h2 className="text-xl font-bold text-black group-hover:text transition-colors duration-300 group-hover:opacity-0">
                  Card Title
                </h2>
                <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors duration-300 group-hover:opacity-0">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
                {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative bg-white rounded-lg shadow-lg hover:-translate-y-4 transition-transform duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-yellow-400 opacity-60 transition-all duration-300 z-10"></div>

            <div className="flex flex-col relative">
              <h3 className="group-hover:text-white text-2xl font-bold opacity-0  group-hover:opacity-100 absolute z-50 left-40  top-32">
                DETAILS
              </h3>
              <div className="w-full">
                <img
                  src="https://htmldemo.net/tm/simply/simply/images/service/7.jpg"
                  alt="Bridge Construction"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-full p-4 relative z-20">
                <h2 className="text-xl font-bold text-black group-hover:text transition-colors duration-300 group-hover:opacity-0">
                  Card Title
                </h2>
                <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors duration-300 group-hover:opacity-0">
                  This is a description for the card. The image is on top, and
                  content is below it.
                </p>
                {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <button className="px-12 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 flex max-w-full mx-auto mt-5 hover:-translate-y-4 transition-transform duration-500">
          View All
        </button> */}
      </div>
    </div>
  );
};

export default Card;
