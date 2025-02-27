
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "./../assets/img/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="mb-8 sm:mb-0">
            <a
              href="#"
              className="flex items-center mb-4 w-full justify-center sm:justify-start"
            >
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  className="w-[100px] md:w-[150px] object-cover bg-white p-2"
                />
                <span className="text-yellow-500 text-2xl font-bold"></span>
              </div>
            </a>
            <p className="text-sm sm:text-base text-gray-300">
              Leading provider of innovative road construction machinery and
              services.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[var(--custom-400)]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a href={"#"}>
                    <span className="text-sm sm:text-base text-gray-300 hover:text-[var(--custom-400)] transition duration-300 cursor-pointer">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[var(--custom-400)]">
              Our Offerings
            </h3>
            <ul className="space-y-2">
              {["Machine Sales", "Rentals", "Maintenance", "Training"].map(
                (item) => (
                  <li key={item}>
                    <a href={"#"}>
                      <span className="text-sm sm:text-base text-gray-300 hover:text-[var(--custom-400)] transition duration-300 cursor-pointer">
                        {item}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[var(--custom-400)]">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-[var(--custom-400)] transition duration-300"
                  aria-label={`Connect on ${Icon.name}`}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            &copy; 2025 RoadMaster. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;