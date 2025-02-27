
import Button from "./Button"; // Importing  button

function BannerContent() {
  return (
    <div className="text-center text-white  absolute  ">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        We Build The Trust
      </h1>
      {/* <span className="text-yellow-500 text-4xl md:text-6xl font-bold mb-4">
        Solutions
      </span> */}
      <p className="text-[1.2rem] text-red-100 mb-6 flex-wrap">
        Delivering top-quality road machines and expert services for your
        large-scale infrastructure projects
      </p>
      <Button />
    </div>
  );
}

export default BannerContent;
