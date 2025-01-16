import BannerContent from "./BannerContent";


function Banner() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center  bg-transparent relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
          url('https://design1-lime.vercel.app/_next/image?url=https%3A%2F%2Fwww.constructionkenya.com%2Fwp-content%2Fuploads%2F2017%2F08%2Fexcavator-2.jpg&w=750&q=100')`,
        
      }}
    >
      <BannerContent />
    </div>
  );
}

export default Banner;