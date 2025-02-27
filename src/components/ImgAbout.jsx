
import { CircleCheckBig } from "lucide-react";
function ImgAbout() {
  return (
    <div className="bg-yellow-50  py-24">
      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-8 ">
        About Us
      </h2>
      <div className="flex flex-wrap justify-start p-5 md:p-0">
        <img
          src="https://htmldemo.net/tm/simply/simply/images/latest-project/2.jpg"
          className="rounded-lg mx-auto w-[550px] h-80 justify-center text-center hover:-translate-y-4 transition-transform duration-500"
        />

        <div className=" md:w-1/2  text-start p-5 md:p-0  ">
          <h3 className="text-4xl  text-gray-800 mb-2 ">
            Building Infrastructure, Connecting Industries
          </h3>
          <p className="text-gray-600">
            As leaders in road construction machinery and services, we provide
            cutting-edge solutions for large-scale infrastructure projects. Our
            commitment to quality and innovation ensures optimal results for
            every client. 30+ years of industry experience State-of-the-art
            equipment Comprehensive maintenance services Expert team of
            professionals
            <ul className="mt-3 flex flex-col gap-3">
              <li className="flex gap-2 ">
                <CircleCheckBig className="text-green-400" />
                30+ years of industry experience
              </li>
              <li className="flex gap-2 ">
                <CircleCheckBig className="text-green-400" />
                State-of-the-art equipment
              </li>

              <li className="flex gap-2">
                <CircleCheckBig className="text-green-400" />
                Comprehensive maintenance services
              </li>
              <li className="flex gap-2">
                <CircleCheckBig className="text-green-400" />
                Expert team of professionals
              </li>
            </ul>
            <button className="px-9  py-2 bg-yellow-500 text-white  rounded-lg hover:bg-transparent border-2 hover:border-yellow-400 transition duration-200 mx-2 mt-8 hover:text-opacity-100 hover:text-yellow-400 text-[1.4rem]">
              Learn more
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImgAbout;
