const Reviews= () => {
  const fs = [
    {
      title: "Rajesh Kumar",

      description:
        "Our team consists of highly skilled professionals with years of experience in road construction.",
    },
    {
      title: "Priya Sharma",

      description:
        "We use top-notch materials and advanced techniques to ensure long-lasting, high-quality roads.",
    },
    {
      title: "Amit Patel",

      description:
        "We stay at the forefront of industry advancements, implementing cutting-edge technologies.",
    },
  ];

  return (
    <div className="bg-yellow-50 py-16 p-4   ">
      <h2 className="text-5xl font-bold text-center text-black mb-8">
        What Our Clients Say
      </h2>

      <div className="flex flex-wrap justify-center gap-4 ">
        {fs.map((f, i) => (
          <div
            key={i}
            className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="text-4xl text-yellow-500 mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
