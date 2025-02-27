import BannerContent from "./BannerContent";


function Banner() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center  bg-transparent relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
          url('https://htmldemo.net/tm/simply/simply/images/slider/bg/1.jpg')`,
      }}
    >
      <BannerContent />
    </div>
  );
}

export default Banner;