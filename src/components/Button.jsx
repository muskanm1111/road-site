

function Button() {
  return (
    <div className="">
      <button className="px-12 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-200 mx-8">
        Explore our
      </button>
      <button className="px-10 py-2 bg-transparent text-yellow-500 border-2 border-amber-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition duration-200 mt-2 md:mt-0">
        Contact Sales
      </button>
    </div>
  );
}

export default Button;
