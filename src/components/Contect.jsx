

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8">
              Have questions about our road machines or services? Were here to
              provide expert answers and tailored solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <p className="text-gray-700">
                  Plot No. 1, Sector 1, Rajapuri, New Delhi, India
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <p className="text-gray-700">+91 9810800000</p>
              </div>

              <div className="flex items-center space-x-4">
                <p className="text-gray-700">info@advancedro.com</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl  mb-8 text-black">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
